package server

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"

	"../entities"
)

// home handler is responsible for the home page view
func (s *server) home() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		books, Berr := s.store.ShowBooks()

		if Berr != nil {
			log.Fatalln("Can't query books.", Berr)
		}

		currency, Cerr := getCurrencyData()

		if Cerr != nil {
			log.Fatalln("Can't get currency data.", Cerr)
		}

		errTpl := tpl.ExecuteTemplate(w, "home.html", map[string]interface{}{
			"books":    books,
			"currency": currency,
		})

		log.Println("Executing template error.", errTpl)
	}
}

func getCurrencyData() ([]entities.Currency, error) {
	resp, err := http.Get(getCurrencyURL)
	var currencies []entities.Currency

	defer resp.Body.Close()

	body, ioErr := ioutil.ReadAll(resp.Body)

	if ioErr != nil {
		return nil, ioErr
	}

	if err != nil {
		return nil, err
	}

	if err := json.Unmarshal(body, &currencies); err != nil {
		return nil, err
	}

	return currencies, nil
}

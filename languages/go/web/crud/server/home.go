package server

import (
	"encoding/json"
	"io"
	"log"
	"net/http"

	"github.com/SerhiiCho/crud/entities"
)

// home handler is responsible for the home page view
func (s *server) home() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		books, Berr := s.store.GetBooks()

		if Berr != nil {
			log.Fatalln("Can't query books.", Berr)
		}

		authors, Aerr := s.store.GetAuthors()

		if Aerr != nil {
			log.Fatalln("Can't query authors.", Aerr)
		}

		currency, Cerr := getCurrencyData()

		if Cerr != nil {
			log.Fatalln("Can't get currency data.", Cerr)
		}

		errTpl := tpl.Response(w, "home", map[string]interface{}{
			"books":    books,
			"authors":  authors,
			"currency": currency,
		})

		if errTpl != nil {
			log.Println("Executing template error.", errTpl)
		}
	}
}

func getCurrencyData() ([]entities.Currency, error) {
	resp, err := http.Get(getCurrencyURL)
	var currencies []entities.Currency

	defer resp.Body.Close()

	body, ioErr := io.ReadAll(resp.Body)

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

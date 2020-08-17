package handlers

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"sort"
)

// Home handler function
func Home(w http.ResponseWriter, r *http.Request) {
	body := getData()
	data := convertResponseBody(body)

	tpl.ExecuteTemplate(w, "home.html", data)
}

func convertResponseBody(body []byte) Response {
	resp := Response{}

	if err := json.Unmarshal(body, &resp); err != nil {
		log.Fatalln("Json unmarshal error:", err)
	}

	sort.Sort(sortByCases(resp))

	return resp
}

func getData() []byte {
	req, httpErr := http.NewRequest("GET", url, nil)

	if httpErr != nil {
		log.Fatalln("Http request error:", httpErr)
	}

	res, err := http.DefaultClient.Do(req)

	if err != nil {
		log.Fatalln("Http client error:", httpErr)
	}

	defer res.Body.Close()
	body, ioErr := ioutil.ReadAll(res.Body)

	if ioErr != nil {
		log.Fatalln("IO error:", ioErr)
	}

	return body
}

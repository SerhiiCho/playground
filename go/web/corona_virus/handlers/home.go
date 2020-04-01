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
	data := convertResponseBody(body).Response

	tpl.ExecuteTemplate(w, "home.html", data)
}

func convertResponseBody(body []byte) Response {
	resp := Response{}

	if err := json.Unmarshal(body, &resp); err != nil {
		log.Fatalf("Json unmarshal error: %s", err)
	}

	sort.Sort(sortByCases(resp))

	return resp
}

func getData() []byte {
	req, httpErr := http.NewRequest("GET", url, nil)

	if httpErr != nil {
		log.Fatalf("Http request error: %s", httpErr)
	}

	req.Header.Add("x-rapidapi-host", host)
	req.Header.Add("x-rapidapi-key", key)

	res, err := http.DefaultClient.Do(req)

	if err != nil {
		log.Fatalf("Http client error: %s", httpErr)
	}

	defer res.Body.Close()
	body, ioErr := ioutil.ReadAll(res.Body)

	if ioErr != nil {
		log.Fatalf("IO error: %s", ioErr)
	}

	return body
}

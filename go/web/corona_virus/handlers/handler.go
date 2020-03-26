package handlers

import (
	"html/template"
	"strconv"
)

const (
	url  = "https://covid-193.p.rapidapi.com/statistics"
	host = "covid-193.p.rapidapi.com"
	key  = "091b42d8ecmsh380ec626aa86af5p14908ajsne8ee54be4633"
)

var tpl *template.Template

func init() {
	tpl = template.Must(template.ParseGlob("templates/*gohtml"))
}

type ResponseItem struct {
	Country string `json:"country"`
	Cases   struct {
		New       string `json:"new"`
		Total     int    `json:"total"`
		Recovered int    `json:"recovered"`
	} `json:"cases"`
	Deaths struct {
		New   string `json:"new"`
		Total int    `json:"total"`
	} `json:"deaths"`
}

// Response from API endpoint
type Response struct {
	Get        string         `json:"get"`
	Parameters []interface{}  `json:"parameters"`
	Errors     []interface{}  `json:"errors"`
	Results    int            `json:"results"`
	Response   []ResponseItem `json:"response"`
}

// ToHTML returns list of countries with html tags
func (r *Response) ToHTML() string {
	title := "<h3>" + strconv.Itoa(len(r.Response)) + " countires</h3>"
	list := title + `<ul class="list-group">`

	for _, item := range r.Response {
		list += `
			<li class="list-group-item">
				<b>` + item.Country + `</b>
				<br>Cases: ` + strconv.Itoa(item.Cases.Total) + `
				<br>New cases: ` + item.Cases.New + `
				<br>Deaths: ` + strconv.Itoa(item.Deaths.Total) + `
				<br>Recovered: ` + strconv.Itoa(item.Cases.Recovered) + `
			</li>
		`
	}

	return list + "</ul>"
}

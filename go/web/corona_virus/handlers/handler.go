package handlers

import "html/template"

const (
	url  = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php"
	host = "coronavirus-monitor.p.rapidapi.com"
	key  = "091b42d8ecmsh380ec626aa86af5p14908ajsne8ee54be4633"
)

var tpl *template.Template

func init() {
	tpl = template.Must(template.ParseGlob("templates/*gohtml"))
}

// Response from API endpoint
type Response struct {
	AffectedCountries []string `json:"affected_countries"`
	StatisticTakenAt  string   `json:"statistic_taken_at"`
}

// ToHTML returns list of countries with html tags
func (r *Response) ToHTML() string {
	list := "<ul class=\"list-group\">"

	for _, country := range r.AffectedCountries {
		list += "<li class=\"list-group-item\">" + country + "</li>"
	}

	return list + "</ul>"
}

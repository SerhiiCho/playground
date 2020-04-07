package handlers

// Response representation of json from API endpoint
type Response struct {
	Global    ResponseGlobal
	Countries []ResponseCountry
	Date      string
}

// ResponseGlobal is a child of Response
type ResponseGlobal struct {
	NewConfirmed   int
	TotalConfirmed int
	NewDeaths      int
	TotalDeaths    int
	NewRecovered   int
	TotalRecovered int
}

// ResponseCountry is a child of Response
type ResponseCountry struct {
	Country        string
	CountryCode    string
	Slug           string
	NewConfirmed   int
	TotalConfirmed int
	NewDeaths      int
	TotalDeaths    int
	NewRecovered   int
	TotalRecovered int
	Date           string
}

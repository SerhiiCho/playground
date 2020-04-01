package entities

// Currency struct
type Currency struct {
	Title string `json:"ccy,omitempty"`
	Buy   string `json:"buy,omitempty"`
	Sale  string `json:"sale,omitempty"`
}

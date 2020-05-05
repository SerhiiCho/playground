package storage

import (
	"encoding/json"
	"io/ioutil"
	"log"
)

// Store keeps the store items
type Store struct {
	Items []StoreItem
}

// NewStore constructor
func NewStore() *Store {
	fileContent, fileErr := ioutil.ReadFile("data")

	if fileErr != nil {
		log.Fatalln(fileErr)
	}

	var store Store
	jsonErr := json.Unmarshal(fileContent, &store.Items)

	if jsonErr != nil {
		log.Fatalln(jsonErr)
	}

	return &store
}

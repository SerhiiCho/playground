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

// AddItem adds new item to store
func (store *Store) AddItem(item StoreItem) {
	// check if this item is already exist

	store.Items = append(store.Items, item)

	jsonBytes, jsonErr := json.Marshal(store)

	if jsonErr != nil {
		log.Fatalln(jsonErr)
	}

	ioErr := ioutil.WriteFile("data", jsonBytes, 0777)

	if ioErr != nil {
		log.Fatalln(ioErr)
	}
}

// GetItem returns item from storage if it exist
func (store *Store) GetItem(key string) *StoreItem {
	//

	return nil
}

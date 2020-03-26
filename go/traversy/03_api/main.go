package main

import (
	"encoding/json"
	"log"
	"math/rand"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

// Author model
type Author struct {
	FirstName string `json:"first_name,omitempty"`
	LastName  string `json:"last_name,omitempty"`
}

// Book model
type Book struct {
	ID     string  `json:"id,omitempty"`
	Isbn   string  `json:"isbn,omitempty"`
	Title  string  `json:"title,omitempty"`
	Author *Author `json:"author,omitempty"`
}

var books []Book

func setJSONHeader(response http.ResponseWriter) {
	response.Header().Set("Content-Type", "application/json")
}

func getBooksWithoutOne(bookID string) []Book {
	for i, item := range books {
		if item.ID == bookID {
			books = append(books[:i], books[i+1:]...)
			break
		}
	}
	return books
}

func getSingleBook(bookID string) Book {
	for _, item := range books {
		if item.ID == bookID {
			return item
		}
	}

	return Book{}
}

func getBooks(response http.ResponseWriter, request *http.Request) {
	setJSONHeader(response)
	json.NewEncoder(response).Encode(books)
}

func getBook(response http.ResponseWriter, request *http.Request) {
	setJSONHeader(response)
	bookID := mux.Vars(request)["id"]
	singleBook := getSingleBook(bookID)

	json.NewEncoder(response).Encode(singleBook)
}

func createBook(response http.ResponseWriter, request *http.Request) {
	setJSONHeader(response)

	var book Book
	_ = json.NewDecoder(request.Body).Decode(&book)

	book.ID = strconv.Itoa(rand.Intn(1000000))
	books = append(books, book)

	json.NewEncoder(response).Encode(book)
}

func deleteBook(response http.ResponseWriter, request *http.Request) {
	setJSONHeader(response)

	bookID := mux.Vars(request)["id"]
	newBooks := getBooksWithoutOne(bookID)

	json.NewEncoder(response).Encode(newBooks)
}

func main() {
	router := mux.NewRouter()

	books = append(books, Book{
		ID:    "1",
		Isbn:  "234234",
		Title: "Harry Potter and Goblet of Fire",
		Author: &Author{
			FirstName: "Joe",
			LastName:  "Rowling",
		},
	})

	books = append(books, Book{
		ID:    "2",
		Isbn:  "2664334",
		Title: "Harry Potter and Prisioner of Askaban",
		Author: &Author{
			FirstName: "Joe",
			LastName:  "Rowling",
		},
	})

	router.HandleFunc("/api/books", getBooks).Methods("GET")
	router.HandleFunc("/api/books/{id}", getBook).Methods("GET")
	router.HandleFunc("/api/books", createBook).Methods("POST")
	router.HandleFunc("/api/books/{id}", deleteBook).Methods("DELETE")

	log.Fatal(http.ListenAndServe(":8000", router))
}

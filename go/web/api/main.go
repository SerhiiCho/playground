package main

import (
	"fmt"
	"log"
	"net/http"

	"database/sql"

	"./handlers"
	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
)

func main() {
	db, err := sql.Open("mysql", "serhii:111111@/api")

	router := mux.NewRouter()

	router.HandleFunc("/api/books", handlers.GetBooks).Methods("GET")
	router.HandleFunc("/api/books/{id}", handlers.GetBook).Methods("GET")
	router.HandleFunc("/api/books", handlers.CreateBook).Methods("POST")
	router.HandleFunc("/api/books/{id}", handlers.DeleteBook).Methods("DELETE")

	fmt.Println("Serving on http://localhost:8000")
	log.Fatal(http.ListenAndServe(":8000", router))
}

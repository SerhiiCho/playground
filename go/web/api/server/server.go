package server

import (
	"database/sql"
	"fmt"
	"net/http"

	"../handlers"
	"../store/sqlstore"
	"github.com/SerhiiCho/reciper/backend/store"
	"github.com/gorilla/mux"
	"github.com/gorilla/sessions"
)

type server struct {
	router *mux.Router
	store  store.Store
}

// newServer configures router and returns pointer to server struct
func newServer(store store.Store, sessionStore sessions.Store) *server {
	serv := &server{
		router:       mux.NewRouter(),
		store:        store,
		sessionStore: sessionStore,
	}

	serv.configureRouter()

	return serv
}

func (serv server) configureRouter() {
	router := mux.NewRouter()

	serv.router.HandleFunc("/api/books", handlers.GetBooks).Methods("GET")
	serv.router.HandleFunc("/api/books/{id}", handlers.GetBook).Methods("GET")
	serv.router.HandleFunc("/api/books", handlers.CreateBook).Methods("POST")
	serv.router.HandleFunc("/api/books/{id}", handlers.DeleteBook).Methods("DELETE")
}

// Start starts the server
func Start() error {
	db, dbErr := newDB()

	if dbErr != nil {
		return dbErr
	}

	defer db.Close()

	store := sqlstore.New(db)
	server := newServer(store, sessionStore)

	fmt.Println("Serving on http://localhost:8000")
	return http.ListenAndServe(":8000", server)
}

// newDB configures the database connection
func newDB() (*sql.DB, error) {
	db, dbErr := sql.Open("mysql", "serhii:111111@/api")

	if dbErr != nil {
		return nil, dbErr
	}

	if pingErr := db.Ping(); pingErr != nil {
		return nil, pingErr
	}

	return db, nil
}

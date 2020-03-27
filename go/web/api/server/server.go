package server

import (
	"fmt"
	"net/http"
	"text/template"

	"../store"
	"../store/sqlstore"
	"github.com/gorilla/mux"
)

var tpl *template.Template

func init() {
	tpl = template.Must(template.ParseGlob("templates/*.gohtml"))
}

type server struct {
	router *mux.Router
	store  store.Store
}

// ServeHTTP serves http
func (s server) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	s.router.ServeHTTP(w, r)
}

// newServer configures router and returns pointer to server struct
func newServer(store store.Store) *server {
	s := &server{
		router: mux.NewRouter(),
		store:  store,
	}

	s.configureRouter()

	return s
}

func (s server) configureRouter() {
	s.router.HandleFunc("/", s.home()).Methods("GET")
	s.router.HandleFunc("/books", s.getBooks()).Methods("GET")
	s.router.HandleFunc("/books/{id}", s.getBook()).Methods("GET")
	s.router.HandleFunc("/books", s.createBook()).Methods("POST")
	s.router.HandleFunc("/books/{id}", s.deleteBook()).Methods("DELETE")
}

// Start starts the server
func Start() error {
	db, dbErr := newDB()

	if dbErr != nil {
		return dbErr
	}

	defer db.Close()

	store := sqlstore.New(db)
	server := newServer(store)

	fmt.Println("Serving on http://localhost:8000")
	return http.ListenAndServe(":8000", server)
}

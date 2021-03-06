package server

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"text/template"

	"../store"
	"../store/sqlstore"
	"github.com/gorilla/mux"
)

var tpl *template.Template

const (
	port             = "8080"
	getCurrencyURL   = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
	mysqlCredentials = "serhii:111111@/crud"
)

func init() {
	tpl = template.Must(ParseTemplates(), nil)
}

func ParseTemplates() *template.Template {
	templ := template.New("")
	err := filepath.Walk("./templates", func(path string, info os.FileInfo, err error) error {
		if strings.Contains(path, ".html") {
			_, err = templ.ParseFiles(path)
			if err != nil {
				log.Println(err)
			}
		}

		return err
	})

	if err != nil {
		panic(err)
	}

	return templ
}

type server struct {
	router *mux.Router
	store  store.Store
}

// newServer configures router and returns pointer to a server struct
func newServer(store store.Store) *server {
	s := &server{
		router: mux.NewRouter(),
		store:  store,
	}

	s.configureRouter()

	return s
}

// ServeHTTP serves http
func (s server) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	s.router.ServeHTTP(w, r)
}

func (s server) configureRouter() {
	s.router.HandleFunc("/", s.home()).Methods("GET")
	s.router.HandleFunc("/books", s.insertBook()).Methods("POST")
	s.router.HandleFunc("/books/{id}/edit", s.editBook()).Methods("GET")
	s.router.HandleFunc("/books/create", s.createBook()).Methods("GET")
	s.router.HandleFunc("/books/update", s.updateBook()).Methods("POST")
	s.router.HandleFunc("/books/delete", s.deleteBook()).Methods("POST")
}

// Start starts the server
func Start() error {
	db, dbErr := newDB()

	if dbErr != nil {
		return dbErr
	}

	defer db.Close()

	s := sqlstore.New(db)

	fmt.Printf("Serving on http://localhost:%s\n", port)
	return http.ListenAndServe(":"+port, newServer(s))
}

package main

import (
	"fmt"
	"net/http"

	"github.com/textwire/textwire/v3"
	"github.com/textwire/textwire/v3/config"
)

var tpl *textwire.Template

func main() {
	var err error
	tpl, err = textwire.NewTemplate(&config.Config{
		DebugMode: true,
	})

	if err != nil {
		fmt.Println(err)
	}

	http.HandleFunc("/", homeView)

	fmt.Println("Visit http://localhost:8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		fmt.Println(err)
	}
}

func homeView(w http.ResponseWriter, r *http.Request) {
	vars := map[string]any{
		"books": []struct{ Title, Author, Image string }{
			{"Harry Potter and the Prisoner of Azkaban", "J.K. Rowling", "https://m.media-amazon.com/images/I/71c4ZAHvjmL.jpg"},
			{"Harry Potter and the Goblet of Fire", "J.K. Rowling", "https://4.bp.blogspot.com/-NyL2B_0ERCU/WvHOB9iqOnI/AAAAAAAALpU/uB_yxsLWiewbH5WHTg6rmNpU4OkFxS8vQCLcBGAs/s1600/GobletofFire.jpg"},
			{"The Great Gatsby", "F. Scott Fitzgerald", "https://placehold.co/400"},
			{"To Kill a Mockingbird", "Harper Lee", "https://placehold.co/400"},
			{"1984", "George Orwell", "https://placehold.co/400"},
			{"Pride and Prejudice", "Jane Austen", "https://placehold.co/400"},
			{"The Catcher in the Rye", "J.D. Salinger", "https://placehold.co/400"},
		},
	}

	err := tpl.Response(w, "home", vars)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

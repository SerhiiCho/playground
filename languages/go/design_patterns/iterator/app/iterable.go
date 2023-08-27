package app

// The IterableCollection interface defines the createIterator
// function, which returns an iterator object
type IterableCollection interface {
	createIterator() iterator
}

// The iterator interface contains the hasNext and next functions
// which allow the collection to return items as needed
type iterator interface {
	HasNext() bool
	Next() *Book
}

// BookIterator is a concrete iterator for a Book collection
type BookIterator struct {
	current int
	books   []Book
}

func (b *BookIterator) HasNext() bool {
	return b.current < len(b.books)
}

func (b *BookIterator) Next() *Book {
	if b.HasNext() {
		book := b.books[b.current]
		b.current++
		return &book
	}

	return nil
}

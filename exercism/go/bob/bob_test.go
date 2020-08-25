package bob

import "testing"

func TestHasLetters(t *testing.T) {
	t.Parallel()

	t.Run("returns true if given string has letter", func(t *testing.T) {
		if hasLetters("234 2 4234 2i") == false {
			t.Error("has to return true but false returned")
		}
	})
	t.Run("returns true if given string has only uppercase letter", func(t *testing.T) {
		if hasLetters("NICE ONE") == false {
			t.Error("has to return true but false returned")
		}
	})
	t.Run("returns true if given string has letter even with symbols", func(t *testing.T) {
		if hasLetters("234 2 4234 2i.") == false {
			t.Error("has to return true but false returned")
		}
	})
	t.Run("returns false if given string doesn't have letter", func(t *testing.T) {
		if hasLetters("234 2 4234 2") == true {
			t.Error("has to return true but true returned")
		}
	})
	t.Run("returns false if given string doesn't have letter even with symbols", func(t *testing.T) {
		if hasLetters("234 2 4234!, 2") == true {
			t.Error("has to return true but true returned")
		}
	})
	t.Run("returns false if given string is empty", func(t *testing.T) {
		if hasLetters("") == true {
			t.Error("has to return false but true returned")
		}
	})
}

func TestHey(t *testing.T) {
	for _, tt := range testCases {
		actual := Hey(tt.input)
		if actual != tt.expected {
			msg := `
	ALICE (%s): %q
	BOB: %s

	Expected Bob to respond: %s`
			t.Fatalf(msg, tt.description, tt.input, actual, tt.expected)
		}
	}
}

func BenchmarkHey(b *testing.B) {
	for i := 0; i < b.N; i++ {
		for _, tt := range testCases {
			Hey(tt.input)
		}
	}
}

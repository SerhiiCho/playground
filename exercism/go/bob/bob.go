package bob

import (
	"log"
	"regexp"
	"strings"
)

// Hey should have a comment documenting it.
func Hey(remark string) string {
	if len(remark) == 0 {
		return "Fine. Be that way!"
	}

	lastChar := remark[len(remark)-1:]

	if !hasLetters(remark) && lastChar == "?" {
		return "Sure."
	}

	if !hasLetters(remark) {
		return "Whatever."
	}

	if remark == strings.ToUpper(remark) && lastChar == "?" {
		return "Calm down, I know what I'm doing!"
	}

	if lastChar == "?" {
		return "Sure."
	}

	if remark == strings.ToUpper(remark) && lastChar != "?" {
		return "Whoa, chill out!"
	}

	if remark == "" {
		return "Fine. Be that way!"
	}

	return "Whatever."
}

func hasLetters(str string) bool {
	letters, err := regexp.Compile("[A-z]")

	if err != nil {
		log.Fatal(err)
	}

	return letters.MatchString(str)
}

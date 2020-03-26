package main

import "testing"

func TestGetHelloReturnsHelloManIfTrueIsPassedAsArgument(t *testing.T) {
	result := GetHello(true)

	if result != "Hello man" {
		t.Error("GetHello must return \"Hello world\" string instead of " + result)
	}
}

func TestIsPrettyReturnsTrueIfYouPassTrueAsFirstArgument(t *testing.T) {
	result := IsPretty(true)

	if result == false {
		t.Error("IsPretty must return true, but false returned")
	}
}

func TestIsPrettyReturnsFalseIfYouPassFalseAsFirstArgument(t *testing.T) {
	result := IsPretty(false)

	if result == true {
		t.Error("IsPretty must return false, but true returned")
	}
}

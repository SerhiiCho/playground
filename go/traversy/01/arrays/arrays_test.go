package arrays

import (
	"strconv"
	"testing"
)

func TestAddAllCountsAllIntegersFromGivenArray(t *testing.T) {
	cases := []struct {
		ArrayData []int
		Result    int
	}{
		{[]int{1, 19, 29, 1, 50}, 100},
		{[]int{1, 19, 29, 1}, 50},
		{[]int{12, 145329, 231}, 145572},
		{[]int{0}, 0},
	}

	for _, testCase := range cases {
		expected := testCase.Result

		t.Run(strconv.Itoa(expected), func(t *testing.T) {
			if AddAll(testCase.ArrayData) != expected {
				t.Error("The result must be " + strconv.Itoa(expected))
			}
		})
	}
}

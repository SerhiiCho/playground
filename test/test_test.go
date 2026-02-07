package main

import (
	"testing"
)

func BenchmarkMapStruct(b *testing.B) {
	for n := 0; n < b.N; n++ {
		m := make(map[int]struct{}, mapSize)
		for i := 0; i < mapSize; i++ {
			m[i] = struct{}{}
		}
	}
}

func BenchmarkMapBool(b *testing.B) {
	for n := 0; n < b.N; n++ {
		m := make(map[int]bool, mapSize)
		for i := 0; i < mapSize; i++ {
			m[i] = true
		}
	}
}

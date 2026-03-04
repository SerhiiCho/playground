.PHONY: dev
dev:
	@clear || true
	go run main.go

.PHONY: bench
bench:
	go test . -bench=BenchmarkTestProject -benchmem

.DEFAULT_GOAL := dev

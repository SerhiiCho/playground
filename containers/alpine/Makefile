# Variables
IMAGE_NAME = goalpine
CONTAINER_NAME = goalpine
WORKDIR = /app

.PHONY: build
build:
	podman build -t $(IMAGE_NAME) .

.PHONY: run
run:
	podman run --rm -it \
		-v $(PWD)/app:$(WORKDIR) \
		--name $(CONTAINER_NAME) \
		$(IMAGE_NAME)

.PHONY: help
help:
	@echo "Available targets:"
	@echo "  build - Build the application"
	@echo "  run   - Run the application"

.DEFAULT_GOAL := help

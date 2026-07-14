.PHONY: build
build:
	podman build -t alpine-supervisor .

.PHONY: run
run:
	podman run -d --name alpine-supervisor alpine-supervisor

.PHONY: exec
exec:
	podman exec -it alpine-supervisor bash

.PHONY: rm
rm:
	podman rm -f alpine-supervisor

IMAGE=nginx-cloudflare-tunnel

.PHONY: build
build:
	podman build -t $(IMAGE) .

.PHONY: exec
exec:
	podman exec -it $(IMAGE) bash

.PHONY: rm
rm:
	podman stop $(IMAGE)
	podman rm $(IMAGE)

.PHONY: run
run:
	mkdir -p web
	podman run -d \
		--name $(IMAGE) \
		-v $(PWD)/web:/var/www/html:Z \
		-p 80:80 \
		$(IMAGE)

.DEFAULT_GOAL := run

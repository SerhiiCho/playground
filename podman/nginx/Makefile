IMAGE=nginx-cloudflare-tunnel

.PHONY: build
build:
	podman build -t $(IMAGE) .

.PHONY: run
run:
	mkdir -p web
	podman run -d \
		--name $(IMAGE) \
		-v $(PWD)/web:/usr/share/nginx/html:Z \
		-p 8080:80 \
		$(IMAGE)

.PHONY: exec
exec:
	podman exec -it $(IMAGE) bash

.PHONY: rm
rm:
	podman stop $(IMAGE)
	podman rm $(IMAGE)

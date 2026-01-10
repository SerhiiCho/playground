PODMAN_COMMAND=podman-compose exec app

.PHONY: ghc
ghc:
	$(PODMAN_COMMAND) ghc test.hs && ./test && rm test test.o

.PHONY: py
py:
	$(PODMAN_COMMAND) python test.py

.PHONY: php
php:
	$(PODMAN_COMMAND) php test.php

.PHONY: js
js:
	$(PODMAN_COMMAND) node test.js

.PHONY: go
go:
	$(PODMAN_COMMAND) go run test.go

.PHONY: c
c:
	$(PODMAN_COMMAND) gcc test.c && ./a.out && rm a.out

.PHONY: bash
bash:
	$(PODMAN_COMMAND) bash ./test.sh

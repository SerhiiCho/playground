PODMAN_COMMAND=podman-compose exec app

.PHONY: hs
hs:
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

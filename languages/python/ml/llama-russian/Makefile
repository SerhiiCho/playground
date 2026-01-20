.PHONY: bundle
bundle:
	pyinstaller main.py \
	  --add-binary "/usr/local/lib/python3.6/site-packages/llama_cpp/libllama.so:llama_cpp/lib"

.DEFAULT_GOAL := bundle

from llama_cpp import Llama
import multiprocessing

model_path = "/model/SambaLingo-Russian-Base.Q8_0.gguf"

# Set gpu_layers to the number of layers to offload to GPU. Set to 0 if no GPU acceleration is available on your system.
llm = Llama(
    model_path=model_path,
    n_ctx=8192,
    n_threads=multiprocessing.cpu_count() - 1,
    n_gpu_layers=0,
    n_batch=512,
    chat_format="chatml",  # ✅ SambaLingo uses ChatML format
    verbose=False,
)

prompt = """Текст поздравления.

Сергей — опытный программист, который много лет работает с современными технологиями, ценит качество кода и постоянно развивается.

Сегодня у него день рождения.

Поздравляем Сергея тёплыми словами:
"""

result = llm.create_completion(
    prompt=prompt,
    max_tokens=300,
    temperature=0.8,
    top_p=0.9,
    repeat_penalty=1.2,
    stop=["\n\n"],
)

print(result["choices"][0]["text"])

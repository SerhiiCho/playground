import torch
from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline, StoppingCriteriaList
from stopping_criteria import stopping_criteria_factory

model_path = "/model"

model = AutoModelForCausalLM.from_pretrained(
    model_path,
    dtype=torch.bfloat16,
    device_map="cpu",
)

tokenizer = AutoTokenizer.from_pretrained(model_path)

# Important: Add padding token if missing
if tokenizer.pad_token is None:
    tokenizer.pad_token = tokenizer.eos_token

# Create pipeline with CPU device
pipe = pipeline(
    "text-generation",
    model=model,
    tokenizer=tokenizer,
)

stopping_criteria = StoppingCriteriaList([stopping_criteria_factory(tokenizer)])

# Generate text
result = pipe(
    "To find a good wife, you need",
    max_new_tokens=100, # Limits length. Stops generation after reasonable length
    do_sample=True, # Enables randomness. Enables random sampling instead of greedy decoding
    temperature=0.7, # Controls creativity (0.5-1.0 works well). Higher = more creative, Lower = more focused
    top_p=0.9, # Nucleus sampling - prevents weird outputs. Uses only the top 90% of probable words with 0.9
    repetition_penalty=1.2, # Discourages repetition (1.0-1.5 range). Actively discourages repeating the same phrases
    num_return_sequences=1, # Just one response
    pad_token_id=tokenizer.pad_token_id,  # Prevents warnings
    stopping_criteria=stopping_criteria,  # Stop at sentence boundaries
)

print(result[0]['generated_text'])

import torch

def stopping_criteria_factory(tokenizer):
    def callback(input_ids: torch.LongTensor, score: torch.FloatTensor, **kwargs) -> bool:
        """Stop when we see ending punctuation after a minimum length"""
        # Get the generated text so far
        text = tokenizer.decode(input_ids[0], skip_special_tokens=True)
        
        # Minimum word count check
        word_count = len(text.split())
        if word_count < 20:  # Don't stop too early
            return False
        
        # Check for ending punctuation
        if text.strip() and text.rstrip()[-1] in ".!?":
            # Avoid stopping at abbreviations
            last_word = text.strip().split()[-1].lower()
            abbreviations = ["mr.", "mrs.", "dr.", "etc.", "i.e.", "e.g.", "vs.", "fig."]

            if not any(last_word.endswith(abbr) for abbr in abbreviations):
                return True
        
        return False

    return callback

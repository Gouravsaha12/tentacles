import requests

def query_ollama(prompt, model="llama2"):
    url = "http://localhost:11434/api/generate"

    payload = {
        "model": model,
        "prompt": prompt,
        "stream": False
    }

    try:
        response = requests.post(url, json=payload, timeout=300)
        response.raise_for_status()
        return response.json().get("response", "")

    except requests.exceptions.RequestException as e:
        return f"Error communicating with Ollama: {e}"

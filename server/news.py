import requests

url = "https://newsapi.org/v2/everything?q=(gold AND commodity) OR XAUUSD&apiKey=e3c7d810af0e41dd869013ab5c5d66e9"
r = requests.get(url = url) 
data = r.json() 

for article in data["articles"]:
    print(article['description'])
    description_tokens = remove_noise(word_tokenize(description))
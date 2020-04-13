import requests
import re, string, random
from nltk.stem.wordnet import WordNetLemmatizer
from nltk.corpus import twitter_samples, stopwords, reuters
from nltk.tag import pos_tag
from nltk.tokenize import word_tokenize
from nltk import FreqDist, classify, NaiveBayesClassifier


def remove_noise(tweet_tokens, stop_words=()):

    cleaned_tokens = []

    for token, tag in pos_tag(tweet_tokens):
        token = re.sub(
            "http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+#]|[!*\(\),]|"
            "(?:%[0-9a-fA-F][0-9a-fA-F]))+",
            "",
            token,
        )
        token = re.sub("(@[A-Za-z0-9_]+)", "", token)

        if tag.startswith("NN"):
            pos = "n"
        elif tag.startswith("VB"):
            pos = "v"
        else:
            pos = "a"

        lemmatizer = WordNetLemmatizer()
        token = lemmatizer.lemmatize(token, pos)

        if (
            len(token) > 0
            and token not in string.punctuation
            and token.lower() not in stop_words
        ):
            cleaned_tokens.append(token.lower())
    return cleaned_tokens


def get_all_words(cleaned_tokens_list):
    for tokens in cleaned_tokens_list:
        for token in tokens:
            yield token


def get_tweets_for_model(cleaned_tokens_list):
    for tweet_tokens in cleaned_tokens_list:
        yield dict([token, True] for token in tweet_tokens)


def sentiment_model_train():
    positive_tweets = twitter_samples.strings("positive_tweets.json")
    negative_tweets = twitter_samples.strings("negative_tweets.json")

    stop_words = stopwords.words("english")

    positive_tweet_tokens = twitter_samples.tokenized("positive_tweets.json")
    negative_tweet_tokens = twitter_samples.tokenized("negative_tweets.json")

    positive_cleaned_tokens_list = []
    negative_cleaned_tokens_list = []

    for tokens in positive_tweet_tokens:
        positive_cleaned_tokens_list.append(remove_noise(tokens, stop_words))

    for tokens in negative_tweet_tokens:
        negative_cleaned_tokens_list.append(remove_noise(tokens, stop_words))

    all_pos_words = get_all_words(positive_cleaned_tokens_list)

    freq_dist_pos = FreqDist(all_pos_words)

    positive_tokens_for_model = get_tweets_for_model(positive_cleaned_tokens_list)
    negative_tokens_for_model = get_tweets_for_model(negative_cleaned_tokens_list)

    positive_dataset = [
        (tweet_dict, "Positive") for tweet_dict in positive_tokens_for_model
    ]

    negative_dataset = [
        (tweet_dict, "Negative") for tweet_dict in negative_tokens_for_model
    ]

    dataset = positive_dataset + negative_dataset

    train_data = dataset

    classifier = NaiveBayesClassifier.train(train_data)
    return classifier

def sentiment(classifier):

    url = "https://newsapi.org/v2/everything?q=(gold AND commodity) OR XAUUSD&apiKey=e3c7d810af0e41dd869013ab5c5d66e9"
    r = requests.get(url=url)
    data = r.json()
    results = data["totalResults"]

    pages = int(100 / 20)
    if results % 20 != 0:
        pages += 1

    articles = []
    for i in range(1, pages):
        url = (
            "https://newsapi.org/v2/everything?q=(gold AND commodity) OR XAUUSD&page="
            + str(i)
            + "&apiKey=e3c7d810af0e41dd869013ab5c5d66e9"
        )
        r = requests.get(url=url)
        data = r.json()
        articles.append(data["articles"])



    positive_articles = 0
    negative_articles = 0
    neutral_articles = 0
    tokens = []
    for page in articles:
        for article in page:
            description = article["description"]
            description_tokens = remove_noise(word_tokenize(description))
            tokens.append(description_tokens)
            classification = classifier.classify(
                dict([token, True] for token in description_tokens)
            )
            if classification == "Positive":
                positive_articles += 1
            else:
                negative_articles += 1

    fd = FreqDist(get_all_words(tokens))
    fd.most_common(20)

    return results, positive_articles, negative_articles, neutral_articles


###################
classifier = sentiment_model_train()
results, positive_articles, negative_articles, neutral_articles = sentiment(classifier)
print(" * Sentiment Classifier Trained")
print(positive_articles)
print(negative_articles)
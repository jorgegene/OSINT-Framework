import twint
import re

def get_tweets(username):
    tweets = []
    c = twint.Config()
    #c.Since = since
    #c.Until = until
    c.Username = username
    c.Limit = 100
    c.Store_object = True
    c.Hide_output = True
    c.Store_object_tweets_list = tweets
    twint.run.Search(c)
    tweets_filtered = filter_tweets(tweets)
    return tweets_filtered


def filter_tweets(tweets):
    filtered_tweets = []
    for tweet in tweets:
        dictionary = {'profile_name': tweet.name, 
                    'link': tweet.link,
                    'datetime': tweet.datetime,
                    'username': tweet.username
                    }
        if  tweet.photos:
            tweet_text = re.sub("(?P<url>https?://[^\s]+)",'', tweet.tweet)
            tweet_image = tweet.photos[0]
            dictionary['tweet_data'] = tweet_text
            dictionary['tweet_image'] = tweet_image
        else:
            dictionary['tweet_data'] = tweet.tweet
       
        filtered_tweets.append(dictionary) 
    return filtered_tweets


def main():
    print(get_tweets("Jorge_Generelo"))

if __name__ == '__main__':
    main()


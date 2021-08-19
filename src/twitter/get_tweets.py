import twint

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
        dictionary = {'tweet_data': tweet.tweet, 
                    'profile_name': tweet.name, 
                    'link': tweet.link,
                    'datetime': tweet.datetime,
                    'username': tweet.username
                    }
        filtered_tweets.append(dictionary) 
    return filtered_tweets
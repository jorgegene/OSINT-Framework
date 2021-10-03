from googlesearch import lucky as google_search
import re

def get_usernames(name):
    twitter_query = name + " twitter"
    facebook_query = name + " facebook"
    insta_query = name + " instagram"
    linkedin_query = name + " linkedin"
    twitter_url = google_search(twitter_query,tld="es")
    insta_url = google_search(facebook_query,tld="es")
    facebook_url = google_search(insta_query,tld="es")
    linkedin_url = google_search(linkedin_query,tld="es")
    #print (twitter_username)
    #print (insta_username)
    #print (facebook_username)
    #print (linkedin_username)
    twitter_username = filter_url(twitter_url)
    insta_username = filter_url(insta_url)
    facebook_username = filter_url(facebook_url)
    linkedin_username = filter_url(linkedin_url)
    dictionary = {'personal_name': name,
                        'twitter_username': twitter_username,
                        'insta_username': insta_username,
                        'facebook_username': facebook_username,
                        'linkedin_username': linkedin_username
                        }

    return dictionary

def filter_url(search_url):
    if "linkedin" in search_url.split("/")[2]:
        username = search_url.split("/")[4]
    else:
        username = search_url.split("/")[3]
    username = username.split("?")[0]
    return username


def main():
    print(get_usernames("Jorge Generelo"))

if __name__ == '__main__':
    main()


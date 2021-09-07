#!/usr/bin/python3


from facebook_scraper import get_posts, get_profile

def get_facebook_posts(username):
    for post in get_posts(username, pages=3, credentials=("osint.uem@gmail.com","osint1234")):
        print(post['text'][:50])
    #print(get_profile(username))


def main():
    get_facebook_posts("Cristiano")

if __name__ == '__main__':
    main()


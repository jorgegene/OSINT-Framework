import locale
from facebook_scraper import get_posts, get_profile

def get_facebook_posts(username):
    #for post in get_posts(username, pages=1, cookies="/home/gne/TFM/OSINT-Framework/src/facebook/cookies.json"):
    #    print(post['text'])
    pass
    
def get_facebook_profile(username):
    profile = get_profile(username, cookies="/app/src/facebook/cookies.json")
    for key, value in profile.items() :
        print (key)
    dictionary = {'profile_picture': profile['profile_picture'],
                        'name': profile['Name'],
                        'username': username,
                        'basic_info': profile['Basic Info'],
                        'contact_info': profile['Contact Info']}
    if 'Category' in profile:
        dictionary['category'] = profile['Category']
    if 'Places Lived' in profile:
        dictionary['places_lived'] = profile['Places Lived']
    if 'Education' in profile:
        dictionary['education'] = profile['Education']
    if 'Family Members' in profile:
        dictionary['family_members'] = profile['Family Members']
    if 'Life Events' in profile:
        dictionary['life_events'] = profile['Life Events']
    if 'Favourite Quotes' in profile:
        dictionary['favourite_quotes'] = profile['Favourite Quotes']
    return dictionary

def main():
    get_facebook_profile("Cristiano")

if __name__ == '__main__':
    main()

import twint

from twint.run import Profile

def get_twitter_profile(username):
    c = twint.Config()
    c.Username = username
    c.Hide_output = True
    c.Store_object = True
    twint.run.Lookup(c)
    
    user = twint.output.users_list[-1]

    dictionary = {'username': username, 
                        'followers': user.followers,
                        'followees': user.following,
                        'bio': user.bio,
                        'profile_image': user.avatar
                        }
    return dictionary


def main():
    print(get_twitter_profile("Cristiano"))

if __name__ == '__main__':
    main()


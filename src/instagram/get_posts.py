#!/usr/bin/python3
import instaloader


def get_posts(username):
    # Get instance
    L = instaloader.Instaloader()

    # Optionally, login or load session
    #L.login("osint_user", "osint1234")        # (login)

    posts = instaloader.Profile.from_username(L.context, username).get_posts()

    posts_list = []

    i = 0
    for post in posts:
        if (i > 10):
            break
        if (post.typename == "GraphImage"):
            dictionary = {'post_image': post.url,
                        'caption': post.caption,
                        'username': post.owner_username,
                        'datetime': post.date}
            posts_list.append(dictionary)
            i = i+1
        
    return posts_list

def main():
    print(get_posts("kevinmitnick.official"))

if __name__ == '__main__':
    main()
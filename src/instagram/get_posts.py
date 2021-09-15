#!/usr/bin/python3
import instaloader
import requests
import shutil


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
            image_url = post.url
            file_name = image_url.split("/")[-1]
            file_name = file_name.split("?")[0]
            url_path = "http://api:8000/media/post_images/" + file_name
            file_path = "/app/media/post_images/"+file_name
            r = requests.get(image_url, stream = True)

            # Check if the image was retrieved successfully
            if r.status_code == 200:
                # Set decode_content value to True, otherwise the downloaded image file's size will be zero.
                r.raw.decode_content = True
                
                # Open a local file with wb ( write binary ) permission.
                with open(file_path,'wb') as f:
                    shutil.copyfileobj(r.raw, f)
            
            dictionary = {'post_image': url_path,
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
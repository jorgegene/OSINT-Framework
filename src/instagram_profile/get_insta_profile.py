#!/usr/bin/python3
import instaloader
import requests
import shutil


def get_insta_profile(username):
    # Get instance
    L = instaloader.Instaloader()

    # Optionally, login or load session
    #L.login("osint_user", "osint1234")        # (login)

    profile = instaloader.Profile.from_username(L.context, username)
    profile_img = profile.profile_pic_url
    file_name = profile_img.split("/")[-1]
    file_name = file_name.split("?")[0]
    url_path = "http://0.0.0.0:8000/media/profile_images/" + file_name
    file_path = "/app/media/profile_images/"+file_name
    r = requests.get(profile_img, stream = True)
    #print (post.likes)
    # Check if the image was retrieved successfully
    if r.status_code == 200:
        # Set decode_content value to True, otherwise the downloaded image file's size will be zero.
        r.raw.decode_content = True
        
        # Open a local file with wb ( write binary ) permission.
        with open(file_path,'wb') as f:
            shutil.copyfileobj(r.raw, f)

    dictionary = {'username': profile.username,
                    'followers': profile.followers,
                    'followees': profile.followees,
                    'biography': profile.biography,
                    'profile_image':url_path
    }

    return dictionary

def main():
    print(get_insta_profile("kevinmitnick.official"))

if __name__ == '__main__':
    main()
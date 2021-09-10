from linkedin_scraper import Person, actions
from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

def get_linkedin_profile(username):
    email = "osint.uem@gmail.com"
    password = "osint1234"
    options = webdriver.ChromeOptions()
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    driver = webdriver.Remote("http://selenium:4444/wd/hub", options=options)
    actions.login(driver, email, password) # if email and password isnt given, it'll prompt in terminal
    profile_link = "https://www.linkedin.com/in/" + username
    person = Person(profile_link, driver=driver)
    dictionary = {'name': person.name,
                'profile_link': profile_link}
    if person.about:
        texto = ""
        for word in person.about:
            texto = texto + str(word)
        dictionary['about'] = texto    
    if person.experiences:
        texto = ""
        for word in person.experiences:
            texto = texto + str(word)
        dictionary['experiences'] = texto  
    if person.educations:
        texto = ""
        for word in person.educations:
            texto = texto + str(word)
        dictionary['educations'] = texto 
    if person.interests:
        texto = ""
        for word in person.interests:
            texto = texto + str(word)
        dictionary['interests'] = texto 
    if person.accomplishments:
        texto = ""
        for word in person.accomplishments:
            texto = texto + str(word)
        dictionary['accomplishments'] = texto 
    if person.contacts:
        texto = ""
        for word in person.contacts:
            texto = texto + str(word)
        dictionary['contacts'] = texto 
    print (dictionary)
    return dictionary


def main():
    get_linkedin_profile("kevinmitnick")

if __name__ == '__main__':
    main()

from django.apps import AppConfig


class TwitterProfileConfig(AppConfig):
    name = 'src.twitter_profile'

    # actstream register model
    # def ready(self):
    #     from actstream import registry
    #     registry.register(self.get_model('User'))

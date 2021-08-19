from django.apps import AppConfig


class TweetConfig(AppConfig):
    name = 'src.twitter'

    # actstream register model
    # def ready(self):
    #     from actstream import registry
    #     registry.register(self.get_model('User'))

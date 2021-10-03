from django.apps import AppConfig


class InstaProfileConfig(AppConfig):
    name = 'src.instagram_profile'

    # actstream register model
    # def ready(self):
    #     from actstream import registry
    #     registry.register(self.get_model('User'))

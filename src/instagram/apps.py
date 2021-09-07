from django.apps import AppConfig


class InstaConfig(AppConfig):
    name = 'src.instagram'

    # actstream register model
    # def ready(self):
    #     from actstream import registry
    #     registry.register(self.get_model('User'))

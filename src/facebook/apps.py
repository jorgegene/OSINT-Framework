from django.apps import AppConfig


class FaceConfig(AppConfig):
    name = 'src.facebook'

    # actstream register model
    # def ready(self):
    #     from actstream import registry
    #     registry.register(self.get_model('User'))

from django.apps import AppConfig


class SearchConfig(AppConfig):
    name = 'src.search'

    # actstream register model
    # def ready(self):
    #     from actstream import registry
    #     registry.register(self.get_model('User'))

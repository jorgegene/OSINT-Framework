# OSINT-Framework

OSINT-Framework allows you to deploy a friendly environment to work with Open Source Intelligence tools and the OSINT-Lab web application. It's built using [python-django-drf-boilerplate](https://github.com/Vivify-Ideas/python-django-drf-boilerplate) and [coreui-free-react-admin-template](https://github.com/coreui/coreui-free-react-admin-template).

Disclaimer: FOR EDUCATIONAL PURPOSE ONLY! The contributors do not assume any responsibility for the use of this tool.
## Highlights

- Ova file to deploy the VM with OSINT-Lab and other tools installed
- 
- Fully dockerized, local development via docker-compose.
- PostgreSQL
- Full test coverage, continuous integration, and continuous deployment.
- Celery tasks

### Features built-in

- JSON Web Token authentication using [Simple JWT](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/)
- Social (FB + G+) signup/sigin
- API Throttling enabled
- Password reset endpoints
- User model with profile picture field using Easy Thumbnails
- Files management (thumbnails generated automatically for images)
- Sentry setup
- Swagger API docs out-of-the-box
- CodeLinter (flake8) and CodeFormatter (yapf)
- Tests (with mocking and factories) with code-coverage support

## Docs

User Guide and Installation Guide can be found in the project directory.

## Prerequisites

If you are familiar with Docker, then you just need [Docker](https://docs.docker.com/docker-for-mac/install/).

## Local Development with Docker

Start the dev server for local development:

```bash
docker-compose build
docker-compose up
```

### Create superuser

If you want, you can create initial super-user with next commands:

```bash
docker exec -it <api_container_id> /bin/bash
./manage.py createsuperuser
```

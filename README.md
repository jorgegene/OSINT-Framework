# OSINT-Framework

OSINT-Framework allows you to deploy a friendly environment to work with Open Source Intelligence tools and the OSINT-Lab web application. It's built using [python-django-drf-boilerplate](https://github.com/Vivify-Ideas/python-django-drf-boilerplate) and [coreui-free-react-admin-template](https://github.com/coreui/coreui-free-react-admin-template).

Disclaimer: FOR EDUCATIONAL PURPOSE ONLY! The contributors do not assume any responsibility for the use of this tool.
## Highlights

- Ova file to deploy the VM with OSINT-Lab and other tools installed
- Docker based Web Application that allows investigators to recolect the digital footprint of a user in the social networks.

## Installagion and Docs

User Guide and Installation Guide can be found in the docs directory.

## OVA

The VM image can be downloaded [here](https://drive.google.com/file/d/1mVOSBu7ezqw3MCCpb4zzhl-0zCF96uBl/view?usp=sharing)

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
### Credentials

Default credentials for using the VM and the web app installed are:

user: ouser
password: osint1234

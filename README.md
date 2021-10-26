# OSINT-Framework
![home](https://user-images.githubusercontent.com/32309214/138879516-96f8a6eb-6f3b-417a-ac29-718e51185876.PNG)
![imagen](https://user-images.githubusercontent.com/32309214/138880236-c2e076a6-92c0-4ab7-9d48-8bf3e0f677a9.png)

OSINT-Framework allows you to deploy a friendly environment to work with Open Source Intelligence tools and the OSINT-Lab web application. It's built using [python-django-drf-boilerplate](https://github.com/Vivify-Ideas/python-django-drf-boilerplate) and [coreui-free-react-admin-template](https://github.com/coreui/coreui-free-react-admin-template).

Disclaimer: FOR EDUCATIONAL PURPOSE ONLY! The contributors do not assume any responsibility for the use of this tool.
## Highlights

- Ova file to deploy the VM with OSINT-Lab and other tools installed
- Docker based Web Application that allows investigators to recolect the digital footprint of a user in the social networks.

## Installagion and Docs

User Guide and Installation Guide can be found in the docs directory.

## OVA
![desktop](https://user-images.githubusercontent.com/32309214/138879474-de3fcff8-6094-45ad-bc31-55b9345c769a.png)

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

### Demo

https://user-images.githubusercontent.com/32309214/138880067-e24410cc-d3bb-42f6-92e6-76b52c04db90.mp4


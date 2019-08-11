# Tracking Service
This service is in charge of tracking the vehicles for the Uber's app

## Technologies
* Python 3
* Flask Framework
* Docker

## Development Environment
1. Build Dockerfile inside the Docker directory:
```docker
$ cd ..
$ cd Docker/
$ docker build -t pythonenv .
```
2. Browse to your working directory, in this case:
```
$ cd ..
$ cd Rastreo/
```
3. Run Docker image and mount the current directory:
```docker
$ docker run -it --rm --name pythoncont -v $PWD:/home pythonenv:latest  /bin/bash
```
4. Inside the container browse to the conainers's home directory, here is where all the app code will be hosted:
```
$ cd home/
```
5. When the container stops running it will automatically be removed, you can check that by typing:
```docker
$ docker ps -a
CONTAINER ID        IMAGE               COMMAND             CREATED          STATUS
```

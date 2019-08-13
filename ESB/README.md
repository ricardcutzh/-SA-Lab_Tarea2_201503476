# ESB
This is the ESB, in charge of managing all of the services that are available

## Technologies
* Node JS
* Express Framework
* Docker

## Development Environment
1. Build Dockerfile inside the Docker directory and run run.sh:
```docker
$ cd ..
$ cd Docker_Node/
$ docker build -t nodeenv .
$ cd ..
$ sh run.sh
```
2. Browse to your working directory, in this case:
```
$ cd ..
$ cd ESB/
```
3. Run Docker image and mount the current directory:
```docker
$ docker run -it --network=sa_tarea2 --rm  -p 8000:8001 --name nodecont -v $PWD:/home nodeenv:latest  /bin/sh
```
4. Inside the container browse to the conainers's home directory, here is where all the app code will be hosted:
```
$ cd home/
```
5. To install all dependencies run the followin command
```
$ npm install
```
6. When the container stops running it will automatically be removed, you can check that by typing:
```docker
$ docker ps -a
CONTAINER ID        IMAGE               COMMAND             CREATED          STATUS
```
# Service URLs

## Request Driver
Requests a new driver for the client
* Method Type: POST

### Parameters
<!---->
| Parameter     | Description | Type    |
| :---          |    :----:   |          ---: |
| client_id    | This parameter represents the client's Id      | Int   |
<!---->

### URL example
```
URL : http://DOMAIN_SITE/request_driver?client_id=6
```
### Responses
All responses are returned in JSON format
* Success Response: Code 200
```json
{
    "my_driver": {
        "name": "D6",
        "lastname": "D6",
        "driver_id": 6,
        "distance": 0
    },
    "my_id": {
        "name": "C6",
        "lastname": "C6",
        "my_id": 6
    },
    "message": "ok"
}
```
* Bad request: code 400
```json
{
    "message": "error"
}
```
* Server Error: code 500
```json
{
    "message": "SERVER ERROR "
}
```
## Track My Driver
Client requests the distance of the pilot
* Method Type: POST

### Parameters
<!---->
| Parameter     | Description | Type    |
| :---          |    :----:   |          ---: |
| client_id    | This parameter represents the client's Id      | Int   |
| driver_id    | This parameter represents the driver's Id      | Int   |
<!---->

### URL example
```
URL : http://DOMAIN_SITE/track_driver?driver_id=6&client_id=6
```
### Responses
All responses are returned in JSON format
* Success Response: Code 200
```json
{
    "message": "ok",
    "progress": {
        "driver_id": "6",
        "client_id": "6",
        "distance": 0
    }
}
```
* Bad request: code 400
```json
{
    "message": "error"
}
```
* Server Error: code 500
```json
{
    "message": "SERVER ERROR "
}
```
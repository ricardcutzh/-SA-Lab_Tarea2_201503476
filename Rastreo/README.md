# Tracking Service
This service is in charge of tracking the vehicles for the Uber's app

## Technologies
* Node JS
* Express Framework
* Docker

## Development Environment
1. Build Dockerfile inside the Docker directory:
```docker
$ cd ..
$ cd Docker_Node/
$ docker build -t nodeenv .
```
2. Browse to your working directory, in this case:
```
$ cd ..
$ cd Rastreo/
```
3. Run Docker image and mount the current directory:
```docker
$ docker run -it --rm -p 8001:8001 --name nodecont -v $PWD:/home nodeenv:latest  /bin/sh
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

## Add a Driver
Adds a driver to the tracking queue
* Method Type: GET

### Parameters
<!---->
| Parameter      | Description | Type    |
| :---        |    :----:   |          ---: |
| driver_id     | Drivers id that will be tracked    | Int   |
| client_id     | Client that needs to track the driver     | Int   |
| name    | driver's name     | String  |
| lastname   | driver's lastname     | String   |
| pos_x     | driver's pos_x    | Int   |
| pos_y     | driver's pos_y     | Int   |
| distance     | drivers initial distance      | Int   |
<!---->

### URL example
```
URL : http://DOMAIN_SITE/add_driver?driver_id=1&name=ric&lastname=ric&distance=5.4526&pos_x=10&pos_y=10&client_id=1
```
### Responses
All responses are returned in JSON format
* Success Response: Code 200
```json
{
    "message": "ok",
    "driver_added": {
        "client_id": "1",
        "driver_id": "1",
        "name": "ric",
        "lastname": "ric",
        "distance": 5,
        "pos_x": "10",
        "pos_y": "10"
    }
}
```
* Bad request: code 400
```json
{
    "message": "wrong parameters"
}
```
* Server Error: code 500
```json
{
    "message": "SERVER ERROR "
}
```
<!---->
## Get Current Position
Gets the driver's current distance from the client
* Method Type: GET

### Parameters
<!---->
| Parameter      | Description | Type    |
| :---        |    :----:   |          ---: |
| driver_id     | Drivers id that will be tracked    | Int   |
| client_id     | Client that needs to track the driver     | Int   |
<!---->
### URL example
```
URL : http://DOMAIN_SITE/get_position?driver_id=1&client_id=1
```
### Responses
All responses are returned in JSON format
* Success Response: Code 200
```json
{
    "message": "ok",
    "progress": {
        "driver_id": "1",
        "client_id": "1",
        "distance": 5
    }
}
```
* Bad request: code 400
```json
{
    "message": "wrong parameters"
}
```
* Not Foung: code 404
```json
{
    "message": "Client - Driver not found"
}
```
* Server Error: code 500
```json
{
    "message": "SERVER ERROR "
}
```
<!---->
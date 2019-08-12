# Driver Notification Service
This service is in charge of notifying the driver about a client in need of a ride

## Technologies
* Python 3
* Flask Framework
* Docker

## Development Environment
1. Build Dockerfile inside the Docker directory:
```docker
$ cd ..
$ cd Docker_Python/
$ docker build -t pythonenv .
```
2. Browse to your working directory, in this case:
```
$ cd ..
$ cd Aviso_Piloto/
```
3. Run Docker image and mount the current directory:
```docker
$ docker run -it --rm -p 8001:8001 --name pythoncont -v $PWD:/home pythonenv:latest  /bin/bash
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
## Running Service
This section explains how to run the container as a service in the background
1. run the following command to expose the service:
```docker
$ cd Aviso_Piloto/
$ docker run -d --rm -p 8002:8001 --name notificationservice -v $PWD:/home pythonenv:latest  /bin/bash -c "cd home/ && python3 app.py"
```
2. check if the container is running
```docker
$ docker ps -a
```
# Service URLs

## Get Driver
Returns an available driver for the client
* Method Type: GET

### Parameters
<!---->
| Parameter     | Description | Type    |
| :---          |    :----:   |          ---: |
| id_client     | This parameter represents the client's Id      | Int   |
| name          | This parameter is the name of the client       | String   |
| lastname      | This parameter is the lastname of the client   | String   |
| pos_x         | This parameter represents the client's x position | Int   |
| pos_y         | This parameter represents the client's y position | Int   |
<!---->

### URL example
```
URL : http://DOMAIN_SITE/get_driver?id_client=1&name=C1&lastname=C1&pos_x=5&pos_y=5
```
### Responses
All responses are returned in JSON format
* Success Response: Code 200
```json
{
    "driver_info": {
        "distance": 1.4142135623730951,
        "id_driver": 2,
        "lastname": "D2",
        "name": "D2",
        "pos_x": 6,
        "pos_y": 6
    },
    "message": "ok"
}
```
* Driver not Found: code 400
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
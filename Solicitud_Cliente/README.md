# Client Service
This service is in charge of managing the clients service requirements

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
$ cd Solicitud_Cliente/
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

# Service URLs

## Get Client
Returns the client specified by the id 
* Method Type: GET

### Parameters
<!---->
| Parameter      | Description | Type    |
| :---        |    :----:   |          ---: |
| id_client     | This parameter represents the client's Id      | Int   |
<!---->

### URL example
```
URL : http://DOMAIN_SITE/get_client?id_client=1
```

### Responses
All responses are returned in JSON format
* Success Response: Code 200
```json
{
    "client": {
        "id_client": 1,
        "lastname": "C1",
        "name": "C1",
        "pos_x": 11,
        "pos_y": 19
    },
    "message": "ok"
}
```
* Client not Found: code 400
```json
{
    "message": "client not found"
}
```
* Server Error: code 500
```json
{
    "message": "SERVER ERROR "
}
```
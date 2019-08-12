#!/bin/bash
docker network create -d bridge sa_tarea2
echo "docker network created..."
cd Solicitud_Cliente/
docker run -d --network=sa_tarea2 --rm -p 8001:8001 --name clientservice -v $PWD:/home pythonenv:latest  /bin/bash -c "cd home/ && python3 app.py"
echo "running Client Service"
cd ..
cd Aviso_Piloto/
docker run -d --network=sa_tarea2 --rm -p 8002:8001 --name notificationservice -v $PWD:/home pythonenv:latest  /bin/bash -c "cd home/ && python3 app.py"
echo "running Notification Service"
cd ..
cd Rastreo/
docker run -d --network=sa_tarea2 --rm -p 8003:8001 --name trackingservice -v $PWD:/home nodeenv:latest  /bin/sh -c "cd home/code/ && node app.js"
echo "running Tracking Service"
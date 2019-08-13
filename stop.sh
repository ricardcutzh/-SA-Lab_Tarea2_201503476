#!/bin/bash
echo "Stoping services"
docker stop clientservice
echo "Client Service stopped"
docker stop notificationservice
echo "Notification Service stopped"
docker stop trackingservice
echo "Tracking Service stopped"
docker stop esb
echo "ESB stopped"
docker network rm sa_tarea2
echo "Removing network"
#!/bin/bash
docker run -d --hostname smack-rabbitmq --name smack-mq --network smack-net rabbitmq:latest

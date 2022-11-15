#!/bin/bash
docker run -d --name smack-mongodb --network smack-net -p 27017:27017 mongo:latest

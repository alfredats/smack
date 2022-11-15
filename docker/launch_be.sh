#!/bin/bash
docker rm -f smack-be
docker run -d --name smack-be --network smack-net -p 8080:8080 --env-file ./be_env.list alfredats/smack-be:beta-1

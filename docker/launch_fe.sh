#!/bin/bash
docker rm -f smack-fe
docker run -d --name smack-fe --network smack-net -p 80:80 --env-file ./fe_env.list alfredats/smack-fe:beta-1

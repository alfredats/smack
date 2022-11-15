#!/bin/bash
docker run -d --name smack-wsrelay -p 15670:15670 --network smack-net cloudamqp/websocket-tcp-relay --upstream tcp://smack-mq:5672



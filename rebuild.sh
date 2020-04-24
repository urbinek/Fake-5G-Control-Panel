#!/bin/bash 
set -x
docker build --no-cache --tag urbinek/fake-5g-control:latest .
docker container kill fake-5g-control
docker container rm fake-5g-control
docker run --name fake-5g-control -d -p 8888:80 urbinek/fake-5g-control
sleep 5
docker container ls --latest
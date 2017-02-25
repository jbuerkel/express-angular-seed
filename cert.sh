#!/bin/bash

if [ ! -d 'cert' ]; then
    mkdir cert
    openssl req -x509 -sha256 -newkey rsa:2048 -keyout cert/key.pem -out cert/cert.pem -days 90 -nodes -subj '//CN=localhost'
else
    echo 'Certificate folder already exists'
fi

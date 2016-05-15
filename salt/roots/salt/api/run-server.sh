#!/usr/bin/env bash

# Run it from anywhere
dir=$(cd $(dirname "$0"); pwd -P)
cd "$dir"

HOME="/home/vagrant"
source $HOME/.bashrc

cd /srv/api
echo "Starting api-server"
nvm use
npm start

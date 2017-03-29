docker rm -f capillary
docker run --name=capillary --hostname=capillary -v $PWD/../code/:/code -ti $1

docker rm -f capillary
docker run -name=capillary $PWD../code/:/code -ti $1

cd ./server
docker build --force-rm=true -t hapi-server-session-example:1.0.0 .
docker run -d -p 3001:3000 --name hapi-session-example-1 hapi-server-session-example:1.0.0
docker run -d -p 3002:3000 --name hapi-session-example-2 hapi-server-session-example:1.0.0

cd ../haproxy
docker build --force-rm=true -t my-haproxy:1.0.0 .
docker run -d -p 80:80 --name haproxy my-haproxy:1.0.0

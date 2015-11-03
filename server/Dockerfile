# docker build --force-rm=true -t hapi-server-session-example:1.0.0 .
# docker run -d -p 3001:3000 --name hapi-session-example-1 hapi-server-session-example:1.0.0
# docker run -d -p 3002:3000 --name hapi-session-example-2 hapi-server-session-example:1.0.0

FROM node:5.0

# Add the application.
WORKDIR /root
ADD . hapi-server

EXPOSE 3000

# Start Node.js
CMD ["/bin/bash", "-c", ". ~/.bashrc && cd hapi-server && node ."]

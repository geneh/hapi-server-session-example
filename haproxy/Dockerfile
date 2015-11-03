# docker build --force-rm=true -t my-haproxy:1.0.0 .
# docker run -d -p 80:80 --name haproxy my-haproxy:1.0.0

FROM haproxy:1.6
COPY haproxy.cfg /usr/local/etc/haproxy/haproxy.cfg

FROM nginx

RUN rm -rf /etc/nginx/conf.d/*

COPY conf/nginx.conf /etc/nginx/nginx.conf
COPY www /usr/share/nginx/html

EXPOSE 80/tcp
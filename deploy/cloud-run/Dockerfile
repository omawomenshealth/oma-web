FROM nginxinc/nginx-unprivileged:stable-alpine

COPY default.conf /etc/nginx/conf.d/default.conf
COPY out/ /usr/share/nginx/html/

EXPOSE 8080

FROM nginxinc/nginx-unprivileged:alpine3.22

USER nginx

COPY dist/finyze-frontend dist/finyze-frontend

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8001

ENTRYPOINT ["nginx", "-c", "/etc/nginx/nginx.conf"]
CMD ["-g", "daemon off;"]

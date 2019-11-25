FROM httpd:latest
WORKDIR /app
COPY build/ . /usr/local/apache2/htdocs/
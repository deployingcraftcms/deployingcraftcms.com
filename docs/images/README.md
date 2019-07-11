# Images

We provide a base image for you to build from. We push these images to Docker Hub and have it trigger to auto build whenver the main PHP repository is updated from Docker, ensuring you have the most up to date images possible.

We provide two types of images for each version of PHP:

1. `apache` image - which is used to serve your web requests
1. `queue` image - which is used to run your queue and does not expose a port

## php-7.3-apache

### [Dockerfile](https://github.com/deployingcraftcms/deployingcraftcms.com/blob/master/php7.2/Dockerfile)

```Dockerfile
FROM php:7.3-apache-stretch
RUN apt update && apt install -y --no-install-recommends git zip unzip zlib1g-dev libpng-dev libjpeg-dev libpq-dev libzip-dev libicu-dev libmagickwand-dev && \
    pecl install imagick
RUN docker-php-source extract && docker-php-ext-install pdo pdo_mysql pdo_pgsql intl zip bcmath gd && docker-php-ext-enable imagick && docker-php-source delete
RUN sed -ri -e 's!/var/www/!/var/www/html/web!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf && \
    sed -ri -e 's!/var/www/html!/var/www/html/web!g' /etc/apache2/sites-available/*.conf && a2enmod rewrite
RUN if [ "$ENV" == "production" ]; then mv $PHP_INI_DIR/php.ini-production $PHP_INI_DIR/php.ini; else mv $PHP_INI_DIR/php.ini-development $PHP_INI_DIR/php.ini; fi
RUN sed -i 's/upload_max_filesize = 2M/upload_max_filesize = 10M/g' $PHP_INI_DIR/php.ini
RUN sed -i 's/memory_limit = 128M/memory_limit = 256M/g' $PHP_INI_DIR/php.ini
RUN sed -i 's/max_execution_time = 30/max_execution_time = 120/g' $PHP_INI_DIR/php.ini
```

## php-7.3-queue

### Dockerfile

## php-7.2-apache

### Dockerfile

```Dockerfile
FROM php:7.2-apache-stretch
RUN apt update && apt install -y --no-install-recommends git zip unzip zlib1g-dev libpng-dev libjpeg-dev libpq-dev libzip-dev libicu-dev libmagickwand-dev && \
    pecl install imagick
RUN docker-php-source extract && docker-php-ext-install pdo pdo_mysql pdo_pgsql intl zip bcmath gd && docker-php-ext-enable imagick && docker-php-source delete
RUN sed -ri -e 's!/var/www/!/var/www/html/web!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf && \
    sed -ri -e 's!/var/www/html!/var/www/html/web!g' /etc/apache2/sites-available/*.conf && a2enmod rewrite
RUN if [ "$ENV" == "production" ]; then mv $PHP_INI_DIR/php.ini-production $PHP_INI_DIR/php.ini; else mv $PHP_INI_DIR/php.ini-development $PHP_INI_DIR/php.ini; fi
RUN sed -i 's/upload_max_filesize = 2M/upload_max_filesize = 10M/g' $PHP_INI_DIR/php.ini
RUN sed -i 's/memory_limit = 128M/memory_limit = 256M/g' $PHP_INI_DIR/php.ini
RUN sed -i 's/max_execution_time = 30/max_execution_time = 120/g' $PHP_INI_DIR/php.ini
```

## php-7.3-queue

### Dockerfile

## Extensions

The following extensions are installed and enabled by default. These meet the Craft CMS server requirements.

> Note: both MySQL and PostgreSQL are supported out of the box; allowing you to move between the two (if required and highly unlikely). This also allows us to maintain one image per PHP version instead of two.

- bcmath
- Core
- ctype
- curl
- date
- dom
- fileinfo
- filter
- ftp
- gd
- hash
- iconv
- imagick
- intl
- json
- libxml
- mbstring
- mysqlnd
- openssl
- pcre
- PDO
- pdo_mysql
- pdo_pgsql
- pdo_sqlite
- Phar
- posix
- readline
- Reflection
- session
- SimpleXML
- sodium
- SPL
- sqlite3
- standard
- tokenizer
- xml
- xmlreader
- xmlwriter
- zip
- zlib

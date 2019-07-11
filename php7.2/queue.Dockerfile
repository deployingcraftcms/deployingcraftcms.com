FROM php:7.2-cli
RUN apt update && apt install -y --no-install-recommends git zip unzip zlib1g-dev libpng-dev libjpeg-dev libpq-dev libzip-dev libicu-dev libmagickwand-dev && \
    pecl install imagick
RUN docker-php-source extract && docker-php-ext-install pdo pdo_mysql pdo_pgsql intl zip bcmath gd && docker-php-ext-enable imagick && docker-php-source delete

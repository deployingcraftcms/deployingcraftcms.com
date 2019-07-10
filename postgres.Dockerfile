FROM php:7.2-apache-stretch
RUN apt update && apt install -y --no-install-recommends git zip unzip zlib1g-dev libpng-dev libjpeg-dev libpq-dev libzip-dev libicu-dev libmagickwand-dev && \
    pecl install imagick
RUN docker-php-source extract && docker-php-ext-install pdo pdo_mysql pdo_pgsql intl zip bcmath gd && docker-php-ext-enable imagick && docker-php-source delete
RUN curl --silent --show-error https://getcomposer.org/installer | php && mv composer.phar /bin/composer
RUN sed -ri -e 's!/var/www/!/var/www/html/web!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf && \
    sed -ri -e 's!/var/www/html!/var/www/html/web!g' /etc/apache2/sites-available/*.conf && a2enmod rewrite

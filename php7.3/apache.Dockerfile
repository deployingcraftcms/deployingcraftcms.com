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

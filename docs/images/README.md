# Images

We provide a base image for you to build from. We push these images to Docker Hub and have it trigger to auto build whenver the main PHP repository is updated from Docker, ensuring you have the most up to date images possible.

We provide two types of images for each version of PHP:

1. `apache` image - which is used to serve your web requests
1. `queue` image - which is used to run your queue and does not expose a port

## php-7.3-apache

### Dockerfile

<<< @/php7.3/Dockerfile

[Source File](https://github.com/deployingcraftcms/deployingcraftcms.com/blob/master/php7.3/Dockerfile)

## php-7.3-queue

### Dockerfile

## php-7.2-apache

### Dockerfile

<<< @/php7.2/Dockerfile

[Source File](https://github.com/deployingcraftcms/deployingcraftcms.com/blob/master/php7.2/Dockerfile)

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

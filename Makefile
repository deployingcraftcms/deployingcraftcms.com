build: php73-postgres

php73-postgres:
	docker build -t deployingcraftcms/php:7.3-apache-postgres -f php7.3/apache-postgres.Dockerfile php7.3
	docker build -t deployingcraftcms/php:7.3-queue-postgres -f php7.3/queue-postgres.Dockerfile php7.3
php73-mysql:
	docker build -t deployingcraftcms/php:7.3-apache-mysql -f php7.3/apache-mysql.Dockerfile php7.3
	docker build -t deployingcraftcms/php:7.3-queue-mysql -f php7.3/queue-mysql.Dockerfile php7.3
php72-mysql:
	docker build -t deployingcraftcms/php:7.2-apache-mysql -f php7.2/apache-mysql.Dockerfile php7.2
	docker build -t deployingcraftcms/php:7.2-queue-mysql -f php7.2/queue-mysql.Dockerfile php7.2
php72-postgres:
	docker build -t deployingcraftcms/php:7.2-apache-postgres -f php7.2/apache-postgres.Dockerfile php7.2
	docker build -t deployingcraftcms/php:7.2-queue-postgres -f php7.2/queue-postgres.Dockerfile php7.2

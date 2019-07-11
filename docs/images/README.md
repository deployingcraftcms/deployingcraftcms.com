# Images

We provide a base image for you to build from. We push these images to Docker Hub and have it trigger to auto build whenver the main PHP repository is updated from Docker, ensuring you have the most up to date images possible.

We provide two types of images for each version of PHP:

1. `apache` image - which is used to serve your web requests
1. `queue` image - which is used to run your queue and does not expose a port

## 7.3-apache

```
docker pull deployingcraftcms/php:7.3-apache
```

### Dockerfile

<<< @/php7.3/apache.Dockerfile

[Source File](https://github.com/deployingcraftcms/deployingcraftcms.com/blob/master/php7.3/apache.Dockerfile)

## 7.3-queue

### Dockerfile

<<< @/php7.3/queue.Dockerfile

[Source File](https://github.com/deployingcraftcms/deployingcraftcms.com/blob/master/php7.3/queue.Dockerfile)

## 7.2-apache

### Dockerfile

<<< @/php7.2/apache.Dockerfile

[Source File](https://github.com/deployingcraftcms/deployingcraftcms.com/blob/master/php7.2/apache.Dockerfile)

## 7.2-queue

### Dockerfile

<<< @/php7.2/queue.Dockerfile

[Source File](https://github.com/deployingcraftcms/deployingcraftcms.com/blob/master/php7.2/queue.Dockerfile)

# Reference

## .dockerignore

When running a Docker based project, you will often have "vendor" or dependency folders that you do not want docker to copy into the build process. This is where you would use a `.dockerignore`. If you are familar with Git, it behaves similar to the `.gitignore` and adding one to your project can drastically reduce build times.

According to Docker, the `.dockerignore` file will:

_"...exclude files and directories that match patterns in it. This helps to avoid unnecessarily sending large or sensitive files and directories to the daemon and potentially adding them to images using `ADD` or `COPY`."_

Here is a default `.dockerignore` that can be used on most Craft projects.

```
vendor
docker-compose.yml
Dockerfile
node_modules
web/cpresources/*
```

[Read more about .dockerignore](https://docs.docker.com/engine/reference/builder/#dockerignore-file)

## Dockerfile

## docker-compose.yaml

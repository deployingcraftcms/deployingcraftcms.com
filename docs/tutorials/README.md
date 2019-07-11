# Tutorials

If you have a suggestion or would like you submit a tutorial, please get in touch!

## Adding PHP Extensions

There are going to be times where you will need to add custom PHP extensions to your project (e.g. `mongo`). This tutorial will walk you through adding a custom extension to your project.

## Installing Xdebug

Xdebug is a PHP extension that is incredibly useful to debug you application, and if you are in the camp of TDD will allow you to see your code coverage.

However, installing this in production is not recommended. Instead, its best to add a script (I prefer a `Makefile`) that will install xdebug for my local development environment.

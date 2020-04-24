1.  [Commands](#commands)
2.  [Symfony](#symfony)
3.  [Extra](#extra)

# COMMANDS

## Create the project

Change the _APP_NAME_ to the __name for your project__.

```
composer create-project symfony/skeleton APP_NAME "^4.2"
```

## Enter on Container

```
docker exec -it php_web /bin/sh
```

## Initialize the server

```
php -S 0.0.0.0:8080 -t public
```
or

```
symfony serve --port=8080
```

# Symfony

The most of commands are running for ```orm-pack```

# Extra

## Extra dependencies

```
composer require encore
npm i --dev vue vue-loader@14.2.2 vue-template-compiler
```


## Contents who can help you

[Installing Encore (Symfony frontend component)](https://symfony.com/doc/current/frontend/encore/installation.html)

[Encore: Setting up your Project](https://symfony.com/doc/current/frontend/encore/simple-example.html)

[Error Pyton on Node-sass](https://github.com/iost-official/explorer/issues/1)

[Symfony Vue tutorial](http://zetcode.com/symfony/vue/)

[Vue.js Running On Symfony4 and Creating Reusable Components](https://dev.to/_mertsimsek/vuejs-running-on-symfony4-and-creating-reusable-components-5fk5)

[BUILDING A SINGLE-PAGE APPLICATION WITH SYMFONY 4, VUE.JS, VUE ROUTER, VUEX AND AXIOS](https://thecodingmachine.io/building-a-single-page-application-with-symfony-4-and-vuejs)


The [Composer](https://getcomposer.org/download) and [Symfony](https://symfony.com/download) was installed globally
## Xdebug

To run without problems open the port 9000 _(On the host machine)_
```
nc -l 9000
```

If you don´t have create one folder on the root

```
mkdir .vscode && touch launch.json

```

Put this content inside the *launch.json*:
Change the _ABSOLUTE_PATH_FOR_YOU_PROJECT_ for the __Absolute path for your project__
```
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Listen for XDebug",
            "type": "php",
            "request": "launch",
            "port": 9000,
            "log" : true,
            "stopOnEntry": false,
            "pathMappings": {
                "/var/www/html": "ABSOLUTE_PATH_FOR_YOU_PROJECT"
            }
        },
        {
            "name": "Launch currently open script",
            "type": "php",
            "request": "launch",
            "program": "${file}",
            "cwd": "${fileDirname}",
            "port": 9000
        }
    ]
}
```

# Symfony

The most of commands are running for ```orm-pack```

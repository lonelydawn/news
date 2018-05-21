# news

## Content

> This is an example which shows how to start a vue project with vuex.
>
> We simulate a backend by timer which vuex action can request data asynchronously.
>
> You can see a news list on the web page, then you can filter news by content or source with the keyword inputted.



## Start

##### dependencies
After clone or download this project, you should install dependencies firstly.

```shell
 npm install
```

##### develop

You can execute

```shell
 npm start
```

to start webpack develop server, then you can debug it.

##### produce

If you want to release a production version, then execute

```shell
 npm run build
```

to compile and compress source code.

Then execute

```shell
 node app.js
```

to start a server which is established by node framework [koa](https://github.com/koajs/koa).


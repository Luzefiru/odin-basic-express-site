# odin-basic-express-site

A simple Node.js backend application to route static HTML & CSS files to the client, built with Express.js.

# Setup

```shell
git clone git@github.com:Luzefiru/odin-basic-node-site.git
cd ./odin-basic-node-site
npm run start
```

# Serving Static CSS Files WITH Express.js

> You can see the code in the `node-version` branch.

An HTML file served by the server after a client initially gets it, can send another `'GET'` request to the server for any `href=` or `src=` files needed.

For example, here is `index.html` which is served when the client navigates to `host:port/`:

```html
<!-- index.html -->
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Node Site</title>
  <link rel="stylesheet" href="./style.css" />
</head>
```

This HTML file then issues another `'GET'` request to resolve the `href="style.css"`. I can let Express.js serve these files via an `express.static(path)` directory. When the client (the `.html` file in this case) requests for `./style.css`, it will send a `GET host:port/style.css` HTTP request which Express.js can serve thanks to `express.static('public')`.

```js
/* src/app.js */
app.use(express.static('public'));
```

I can think of this as _"always listen to any GET requests for files inside the 'public' directory"_.

# Reference

These were the requirements in The Odin Project's [Project: Basic Informational Site](https://www.theodinproject.com/lessons/nodejs-basic-informational-site) page in order to practice pure Node.js server-side programming.

/* server instance setup */
const express = require('express');
const app = express();

const host = 'localhost';
const port = 8000;
app.listen(port, host, () => {
  console.log(`Server is now being hosted at: http://${host}:${port}`);
});
/* always serve public directory */
app.use(express.static('public'));
/* routers */
const pagesRouter = require('./routes/pages.js');
app.use(pagesRouter);

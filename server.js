var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("src", {default: "index.html"}));
app.listen(5500);
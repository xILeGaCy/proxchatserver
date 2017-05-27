const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

require("./api/routes/IndexRoutes")(app);

app.listen(3000);

console.log("Prox chat api started:");
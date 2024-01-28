const express = require('express');
const routes = require('./routes');
require('./config/db')

const app = express();
const port = 3333;

app.use(express.json())
app.use(routes)

app.listen(port, () => {
    console.log(`Running in port: ${port}`)
})
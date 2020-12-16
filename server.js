const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// panggil router
let routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log(`Server started on 3000`);
});

/**
 * Created by Megan on 6/19/2017.
 */

const express = require('express');
const app = express();

app.use('/', express.static(__dirname + "/public_static"));

app.listen(2000, function () {
    console.log("Server started on http://localhost:2000");
});
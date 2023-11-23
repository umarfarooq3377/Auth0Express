const express = require('express');
const app = express();
require("dotenv").config()
const { auth } = require('express-openid-connect');
const indexRoutes = require("./routes/index.js");

const { SECRET, BASEURL, CLIENTID, ISSUER } = process.env;

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: SECRET,
    baseURL: BASEURL,
    clientID: CLIENTID,
    issuerBaseURL: ISSUER
};

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(auth(config));
app.use('/', indexRoutes);

app.listen(3000, () => {
    console.log("Express server listening on 3000")
})
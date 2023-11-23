const express = require('express');
const router = express.Router();

const { requiresAuth } = require("express-openid-connect")

router.get("/", (req, res) => {
    const { oidc } = req
    console.log("🚀 ~ file: index.js:8 ~ router.get ~ oidc:", oidc?.user)
    res.render('index', { title: "Express Demo APP", isAuthenticated: oidc.isAuthenticated(), user: oidc.user })
})

router.get("/secured", requiresAuth(), (req, res) => {
    const { oidc } = req
    res.render('secured', { title: "Secured page", isAuthenticated: oidc.isAuthenticated(), user: oidc.user })
})

module.exports = router;
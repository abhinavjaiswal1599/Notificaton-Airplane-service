const express = require('express');
const v1Routes = require('./v1');
const router = express.Router();

// Correct usage: provide the route path before the middleware function
router.use('v1', v1Routes);

module.exports = {
    router
};

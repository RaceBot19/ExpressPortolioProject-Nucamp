const express = require('express');
const menuRouter = express.Router();

menuRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all menu items to you');
})
.post((req, res) => {
    // update this for menu item details? 
    res.end(`Will add the menu item: ${req.body.name} with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end('Deleting all menu items');
});

module.exports = menuRouter;
import DB from "../DB";
const express = require('express');
const chirpsStore = require('../filestore');

let router = express.Router();

router.get('/id?', (req, res) => {
    let id = req.params.id
    if(id){
        res.json(chirpsStore.GetChirps(req));
    } else {
        res.send(chirpsStore.GetChirps());
    }



});

router.post('/', (req, res) => {
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
});

module.exports = router;

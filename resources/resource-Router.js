
const express = require('express');

const knex = require('knex');

const config = require('../knexfile.js');

const db = knex(config.development);

const router = express.Router();

//Resource
 //Create

 router.post('/', (req, res) => {
    const resourceData = req.body;
        db('resource')
        .insert(resourceData)
        .then((id)=> res.status(201).json({data: id}))
        .catch((err)=> console.log(err),
        res.status(400).json({error:'That resource name already exists'}) )
    
    })
    
    //Read
    
    router.get('/', (req, res) => {
        db.select('*')
        .from('resource')
        .then((resources)=> res.status(200).json({data: resources}))
        .catch((err)=> { console.log(err)})
        })

    
    module.exports = router;
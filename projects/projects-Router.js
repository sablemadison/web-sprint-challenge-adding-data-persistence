const express = require('express');

const knex = require('knex');

const config = require('../knexfile.js');

const db = knex(config.development);

const router = express.Router();

//Project
 //Create

router.post('/', (req, res) => {
    const projectData = req.body;
        db('project')
        .insert(projectData)
        .then((id)=> res.status(201).json({data: id}))
        .catch((err)=> console.log(err))
    
    })
    
    //Read
    
    router.get('/', (req, res) => {
        db.select('*')
        .from('project')
        .then((projects)=> res.status(200).json({data: projects}))
        .catch((err)=> { console.log(err)})
    })


//Resource
 //Create

router.post('/', (req, res) => {
    const resourceData = req.body;
        db('resource')
        .insert(resourceData)
        .then((id)=> res.status(201).json({data: id}))
        .catch((err)=> console.log(err))
    
    })
    
    //Read
    
    router.get('/', (req, res) => {
        db.select('*')
        .from('resource')
        .then((resources)=> res.status(200).json({data: resources}))
        .catch((err)=> { console.log(err)})
        })

//Task
 //Create

 router.post('/', (req, res) => {
    const taskData = req.body;
        db('task')
        .insert(taskData)
        .then((id)=> res.status(201).json({data: id}))
        .catch((err)=> console.log(err))
    
    })
    
    //Read
    
    router.get('/', async  (req, res) => {
       
    const tasks = await db('task as t')
     .join('project as p', 'p.id', 't.project_id')
     .select('t.id’,’t.description','t.notes','t.completed', 't.project_id','p.name', 'p.description' )
     .where({project_id: id})
        })
    

        module.exports = router;
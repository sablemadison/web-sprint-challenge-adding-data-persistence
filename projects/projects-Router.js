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

    //Read Tasks

router.get('/:id/task', async (req, res) => {
    const { id } = req.params;
    try {
        const tasks = await db('task')
         .join('project', 'project.id', 'task.project_id')
         .select('task.id','task.notes','task.completed', 'task.project_id','project.project_name', 'project.description' )
         .where({project_id: id});
        res.status(200).json(tasks)
    } catch(err) {
        console.log(err),
        res.status(500).json({error:'could not return tasks'})
    }
})




        module.exports = router;
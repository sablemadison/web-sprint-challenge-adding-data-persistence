const express = require('express');

const knex = require('knex');

const config = require('../knexfile.js');

const db = knex(config.development);

const router = express.Router();

//Task
 //Create

 router.post('/', (req, res) => {
    const taskData = req.body;
        db('task')
        .insert(taskData)
        .then((id)=> res.status(201).json({data: id}))
        .catch((err)=> console.log(err),
        res.status(400).json({error:'The project id is invalid'}))
    
    })
    
    //Read

    router.get('/', (req, res) => {
        db.select('*')
        .from('task')
        .then((tasks)=> res.status(200).json({data: tasks}))
        .catch((err)=> { console.log(err)})
        })
    


//     router.get('/:id', (req, res) => {
//         const id = req.body.project_id;
//  try {
//         return db.select('task as t')
//         .join('project as p', 'p.id', 't.project_id')
//         .select('t.id’,’t.description','t.notes','t.completed', 't.project_id','p.name', 'p.description' )
//         .where({'t.project_id': id});
//  }catch(err){
//      console.log(err)
//  }
     
//          })
    // router.get('/', async  (req, res) => {
    //    const id = req.body.project_id

    //    try {
    // const tasks = await db('task as t')
    //  .join('project as p', 'p.id', 't.project_id')
    //  .select('t.id’,’t.description','t.notes','t.completed', 't.project_id','p.name', 'p.description' )
    //  .where({project_id: id});
   
    //    }
    //    catch(err){
    //        console.log(err)
    //    }
    
    //     })
    

        module.exports = router;
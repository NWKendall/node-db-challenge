const express = require('express');

const projData = require('./projects-model.js')

const router = express.Router();


//projects
router.get('/', (req, res) => {
  projData
  .getProjects()
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Projects!' });
  });
})

router.get('/:id', (req, res) => {
  projData
  .getProjectId(req.params.id)
  .then(project => {
    res.json(project);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get project!' });
  });

})


router.post('/', (req, res) => {
  const project = req.body;

  projData.addProject(project)
  .then(proj => {
    res.status(201).json(proj);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new project' });
  });
});




// tasks
router.get('/:id/tasks', (req, res) => {
  // Get all of an individual user's posts
  
  const { id } = req.params;
  const task = { ...req.body, project_id: id };

  projData
    .getTasks(task.project_id)
    .then(tasks => {
      console.log(`post2`, tasks)
      !tasks?
        res.status(404).json({ error: "no posts for this user exist"}) :      
        res.status(200).json(tasks)      
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "WTF!"})
    })      
});


router.post('/:id/posts', (req, res) => {
  // user creates a new post
  const { id } = req.params;
  const task = { ...req.body, project_id: id };  
  console.log(`BODY from user task`, task)

  projData
    .addProjectTask(task)
    .then(newTask => {          
          res.status(201).json(newTask)
        })
    .catch(err => {
      console.log(`this is error from new user task`, err)
      res.status(500).json({ error: "Creating new TASK FAILED" })
    })    
});

module.exports = router
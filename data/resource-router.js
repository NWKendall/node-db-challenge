const express = require('express');
const resourceData = require('./resource-model.js')
const router = express.Router();


router.get('/', (req, res) => {
  resourceData
  .getResources()
  .then(resources => {
    res.json(resources);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Projects!' });
  });
})

router.get('/:id', (req, res) => {
  resourceData
  .getResourceId(req.params.id)
  .then(resource => {
    res.json(resource);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resource!' });
  });

})


router.post('/', (req, res) => {
  const resource = req.body;

  resourceData
    .addResource(resource)
    .then(reso => {
      res.status(201).json(reso);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
});

module.exports = router
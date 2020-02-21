const express = require('express');

const projectRouter = require('./data/projects-router')

// const resourceRouter = require('./data/resource-router')


const server = express();

server.use(express.json());

server.get('/api', (req, res) => {
  res.status(200).json({ server: "WORKING"})
})

server.use("/api/projects", projectRouter)
// server.use("/api/resources", resourceRouter)

const port = 7000
server.listen(port, () => console.log(`SERVER listening port: ${port}`))
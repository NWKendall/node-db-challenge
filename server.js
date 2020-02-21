const express = require('express');



const server = express();

server.use(express.json());

server.get('/api', (req, res) => {
  res.status(200).json({ server: "WORKING"})
})

const port = 7000
server.listen(port, () => console.log(`SERVER listening port: ${port}`))
const db = require('./db-config')

module.exports = {
  getResources,
  getResourceId,
  addResource
}

function getResources(){
  return db('resources');
}

function getResourceId(id){
  return db('resources')
    .where({ id })
    .first();
}

function addResource(proj){
  return db('resources')
    .insert(proj, 'id')
}
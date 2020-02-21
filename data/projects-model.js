const db = require('./db-config')

module.exports = {
  getProjects,
  getProjectId,
  addProject,
  getTasks,
  addProjectTask
}


//PROJECTS

function getProjects(){
  return db('projects');
}

function getProjectId(id){
  return db('projects')
    .where({ id })
    .first();
}

function addProject(proj){
  return db('projects')
    .insert(proj, 'id')
}

// TASKS

function getTasks(id){
  return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select('t.id', 't.description', 't.notes')
    .where('t.project_id', id)
}


function addProjectTask(proj){
  return db('tasks')
    .insert(proj)
    
}
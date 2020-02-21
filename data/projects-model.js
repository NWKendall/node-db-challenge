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
  return db('projects as p')
    .join('tasks as t', 't.project_id', 'p.id')   
    .join('project_resources as pr', 'pr.project_id', 'p.id')
    .join('resources as r', 'r.id', 'pr.project_id')
    .select(
      'p.id as pID#',
      'p.name as project_name',
      'p.completed as proj_comp',
      't.description as task_desc',
      't.notes as task_note',
      't.completed as task_comp',
      'r.name as resource'      
    )
    .where('p.id', id )
    
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
  return db('projects')
    .insert(proj)
    .then(ids => {
      return getProjectId(ids)
    })
    
}
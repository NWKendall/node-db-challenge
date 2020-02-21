
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .truncate()
    .then(function () {
      // Inserts seed entries]
      const projSeed = [
        {notes: 'task1', description: 'task1', completed: false, project_id: 1},
        {notes: 'task2', description: 'task2', completed: false, project_id: 2},
        {notes: 'task3', description: 'task3', completed: false, project_id: 3},
        {notes: 'task4', description: 'task4', completed: false, project_id: 4},
        {notes: 'task5', description: 'task5', completed: false, project_id: 5},
      ]
      return knex('tasks').insert(projSeed);
    });
};

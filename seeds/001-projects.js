
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function () {
      // Inserts seed entries]
      const projSeed = [
        {name: 'proj1', description: 'proj1', completed: false},
        {name: 'proj2', description: 'proj2', completed: false},
        {name: 'proj3', description: 'proj3', completed: false},
        {name: 'proj4', description: 'proj4', completed: false},
        {name: 'proj5', description: 'proj5', completed: false},
      ]


      return knex('projects').insert(projSeed);
    });
};

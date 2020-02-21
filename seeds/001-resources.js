
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .truncate()
    .then(function () {
      // Inserts seed entries]
      const projSeed = [
        {id: 1, name: 'resource1', description: 'resource1' },
        {id: 2, name: 'resource2', description: 'resource2' },
        {id: 3, name: 'resource3', description: 'resource3' },
        {id: 4, name: 'resource4', description: 'resource3' },
        {id: 5, name: 'resource5', description: 'resource5' },
      ]
      return knex('resources').insert(projSeed);
    });
};
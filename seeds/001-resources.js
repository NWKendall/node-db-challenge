
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .truncate()
    .then(function () {
      // Inserts seed entries]
      const projSeed = [
        {name: 'resource1', description: 'resource1' },
        {name: 'resource2', description: 'resource2' },
        {name: 'resource3', description: 'resource3' },
        {name: 'resource4', description: 'resource4' },
        {name: 'resource5', description: 'resource5' },
      ]
      return knex('resources').insert(projSeed);
    });
};
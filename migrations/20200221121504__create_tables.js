
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments();
    tbl
      .string('name', 255)
      .unique()
      .notNullable()
    tbl.string('description', 255)
    tbl.boolean('completed')
  })

  .createTable('tasks', tbl => {
    tbl.increments();
    tbl.string('description', 255)      
      .notNullable()
    tbl.string('notes', 255)
    tbl.boolean('completed')
    tbl
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })

  .createTable('project_resources', tbl => {
    tbl.primary(['project_id', 'resource_id'])

    tbl
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    tbl
      .integer('resource_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resources')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
  .createTable('resources', tbl => {
    tbl.increments();
    tbl.string('name', 255)      
    .notNullable()
    tbl.string('description', 255)
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('resources')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};

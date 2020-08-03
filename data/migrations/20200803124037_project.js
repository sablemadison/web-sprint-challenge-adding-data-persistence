
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('project', tbl => {
        tbl.increments();
        tbl.string('project_name', 128)
           .notNullable();
        tbl.string('description');
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false);
    })
    .createTable('resource', tbl => {
        tbl.increments();
        tbl.string('resource_name', 128)
           .notNullable()
           .unique();
        tbl.string('description');
    })
    .createTable('task', tbl => {
        tbl.increments();
        tbl.string('description')
            .notNullable();
        tbl.string('notes');
        tbl.boolean('completed')
              .notNullable()
              .defaultTo(false);
        tbl.integer('project_id')
           .unsigned()
           .notNullable()
           .references('id')
           .inTable('project')
    })
   .createTable('project_resources', tbl => {
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('project')
    tbl.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resource')
  
  
    tbl.primary(['project_id', 'resource_id']);
  });
  
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('task')
    .dropTableIfExists('resource')
    .dropTableIfExists('project')

};

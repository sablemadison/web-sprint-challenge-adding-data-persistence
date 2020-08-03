
exports.up = function(knex) {
    knex.schema.table('task', table => {
        table.renameColumn('description', 'task_description')
    })
};

exports.down = function(knex) {
    table.dropColumn('task')
};

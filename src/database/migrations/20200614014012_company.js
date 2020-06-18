exports.up = function(knex) {
    return knex.schema.createTable('company', function(table){       
        table.increments().primary();
        table.string('name').notNullable();
        table.string('cnpj').notNullable();
        table.string('password').notNullable();
        table.integer('qtdInvoicesMonth').notNullable();
        table.integer('qtdDebtsMonth').notNullable();
        table.integer('companyIndex').notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('company');
};

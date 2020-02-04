exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table) => {
    table.increments("VIN");
    table.text("make").notNull();
    table.text("model").notNull();
    table.float("mileage").notNull();
    table.text("transmission_type");
    table.text("title_status");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars");
};

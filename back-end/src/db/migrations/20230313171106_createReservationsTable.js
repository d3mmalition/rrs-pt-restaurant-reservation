exports.up = function (knex) {
    return knex.schema.createTable("reservations", (table) => {
      table.increments("reservation_id").primary();
      table.string("first_name");
      table.string("last_name");
      table.string("mobile_number", 12);
      table.date("reservation_date");
      table.time("reservation_time");
      table.integer("people").defaultTo(1);
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("reservations");
  };
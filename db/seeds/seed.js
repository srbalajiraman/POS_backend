/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
    await knex.raw('TRUNCATE TABLE "nationality" CASCADE')
  
    await knex('nationality').insert([
      {
        id: 1,
        name: "India"
      },
      {
        id: 2,
        name: "USA"
      }
    ])

  };
  
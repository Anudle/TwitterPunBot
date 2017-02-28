var knex = require('./knex');
function Puns(){
  return knex("Puns").where('id', 1)
}
console.log(Puns())
module.exports = {
Puns
}

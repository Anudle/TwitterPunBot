var knex = require('knex');

function Puns(){
  return knex('Puns')
}

module.exports = {
  getPuns: Puns
  // getAllPuns: function(){
  //   return getPuns()
  //}
}

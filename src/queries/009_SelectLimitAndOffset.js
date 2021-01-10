/**
 * select id, first_name, email as uemail
 * from users
 * where id between 100 and 150
 * order by first_name desc
 *
 * Limit = limita quantidade de valores
 * Offset = 'Paginação'
 */

const knex = require('../config/database')

const query = knex('users')
  .select('id', 'first_name', 'email as uemail')
  .whereBetween('id', [1,150])
  .orderBy('first_name', 'asc')
  .limit(5)
  .offset(10)


console.log(query.toString())

query.then(response => {
  if(response) console.log(response)
}).catch(err => console.log(err))
.finally(() => knex.destroy())

const express = require('express');
const cors = require('cors');
const routes = require("./routes");
const app = express();
app.use(cors({
    origin:'*'
}))
app.use(express.json())
app.use(routes);

/*
* Rota/Recurso
*/
/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do Backend
 * POST: Criar uma informação no backend
 * PUT: alterar uma informação no backend
 * Delete: remover uma informação do backend
 */

 /**
  * Tipos de parametros:
  * 
  * Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parametros utilizados para identificar recursos
  * Request body: Corpo da req para criar ou alterar recursos
  */

  /**
   * SQL: Mysql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver: SELECT * FROM USERS
    * Query Builder: table('users').select('*').where()
    */


app.listen(3333);
const mysql = require('mysql')
const dbConfig = require('../config/db')

const pool = mysql.createPool(dbConfig)

const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if(err) {
        reject(err)
      }else {
        connection.query(sql, values, (error, results, fields) => {
          if(error) {
            reject(error)
          }else {
            resolve(results)
          }
          connection.release()
        })
      }
    })
  })
}

const createTable = (sql) => {
  return query(sql, [])
}

const findById = (table, id) => {
  return query('SELECT * FROM ?? WHERE id = ?', [table, id])
}

const filterByPage = (table, columns, start, end) => {
  return query('SELECT ?? FROM ?? LIMIT ? , ?', [columns, table, start, end])
}

const insertData = (table, values) => {
  return query('INSERT INTO ?? SET ?', [table, values])
}

const updateData = (table, values, id) => {
  return query('UPDATE ?? SET ? WHERE id = ?', [table, values, id])
}

const deleteById = (table, id) => {
  return query('DELETE FROM ?? WHERE id = ?', [table, id])
}

const select = (table, columns) => {
  return query('SELECT ?? FROM ??', [columns, table])
}

const count = (table) => {
  return query('SELECT COUNT(*) AS total FROM ??', [table])
}

module.exports = {
  query,
  createTable,
  findById,
  filterByPage,
  insertData,
  updateData,
  deleteById,
  select,
  count
}
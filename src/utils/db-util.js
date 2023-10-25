const mysql = require("mysql");
const dbConfig = require("../config/db");

const pool = mysql.createPool(dbConfig);

/**
 * 通用sql查询方法
 * @author jinpengh
 *
 * @param {String} sql 完整sql语句
 * @param {Array} values 数据
 * @returns {*}
 */
function query(sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, (error, results, fields) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
          connection.release();
        });
      }
    });
  });
}

/**
 * 根据查询条件、排序、取部分数据
 * @author jinpengh
 *
 * @param {String} table 表名
 * @param {String} fields 字段
 * @param {Object} condition 条件
 * @param {String} condition.where 筛选条件
 * @param {String} condition.orderBy 排序字段
 * @param {String} condition.order 升序降序 ASC/DESC
 * @param {Number} condition.offset 起始位置（偏移量）
 * @param {Number} condition.size 个数
 * @returns {*}
 */
function filterByPage(table, fields, condition) {
  const { where, orderBy, order, offset, size } = condition;
  let orderCondition = orderBy ? `${orderBy} ${order}, create_date_time DESC` : 'create_date_time DESC'
  return query(
    `SELECT ${fields} FROM ${table} WHERE deleted != 1 AND ${where ? where : '1 = 1'} ORDER BY ${orderCondition} LIMIT ${offset},${size}`
  );
}

/**
 * 根据查询条件统计条数
 * @author jinpengh
 *
 * @param {String} table 表名
 * @param {String} where 筛选条件
 * @returns {*}
 */
async function count(table, where) {
  const [result] = await query(
    `SELECT COUNT(*) AS total FROM ${table} WHERE deleted != 1 AND ${where ? where : '1 = 1'}`
  );
  return result.total;
}


/**
 * 插入语句
 * @author jinpengh
 *
 * @async
 * @param {*} table 表名
 * @param {*} values 插入数据 key1=value1,key2=value2
 * @returns {*}
 */
async function insert(table, values) {
  await query(`INSERT INTO ${table} SET ${values}`)
  return true;
}


/**
 * 通过id删除某条数据
 * @author jinpengh
 *
 * @async
 * @param {*} table 表名
 * @param {*} id 
 * @returns {*}
 */
async function deleteById(table, id) {
  await query(`DELETE FROM ${table} WHERE id = ${id}`)
  return true;
}

/**
 * 通过id逻辑删除某条数据
 * @param {*} table 表名
 * @param {*} id 
 * @returns 
 */
async function logicDeleteById(table, id) {
  await query(`UPDATE ${table} SET deleted = 1 WHERE id = ${id}`)
  return true;
}

module.exports = {
  query,
  filterByPage,
  count,
  insert,
  deleteById,
  logicDeleteById
};

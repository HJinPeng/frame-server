/**
 * 格式化数据库查询字段
 * @author jinpengh
 *
 * @param {Array<String>} [fieldArr=[]] 数据库字段数组
 * @param {boolean} [common=true] false则添加不添加通用字段
 * @returns {String}
 */
function stringifySqlField(fieldArr = [], common = true) {
  if (common) {
    fieldArr = fieldArr.concat([
      "create_by_name",
      "create_date_time",
      "update_by_name",
      "update_date_time",
    ]);
  }
  return fieldArr.join(", ");
}

/**
 * 根据分页等查询条件生成sql的部分参数
 * @author jinpengh
 *
 * @param {{ orderBy: String; isAsc: Boolean; pageNo: Number; pageSize: Number; filters: Array<{key: String; value: String; operator: '=' | 'LIKE'}>; }} param0
 * @param {String} param0.orderBy
 * @param {Boolean} param0.isAsc
 * @param {Number} param0.pageNo
 * @param {Number} param0.pageSize
 * @param {Array<{key: String; value: String; operator: '=' | 'LIKE'}>} param0.filters
 * @returns {{ orderBy: String; order: String; offset: Number; size: Number; where: String; }}
 */
function generatePageCondition({ orderBy, isAsc, pageNo, pageSize, filters }) {
  pageNo = parseInt(pageNo || 1);
  pageSize = parseInt(pageSize || 10);
  const where = [];
  filters.forEach((item) => {
    if (item.value) {
      where.push(
        `${item.key} ${item.operator} ${
          item.operator === "LIKE" ? `'%${item.value}%'` : `'${item.value}'`
        }`
      );
    }
  });
  return {
    orderBy,
    order: isAsc ? "ASC" : "DESC",
    offset: (pageNo - 1) * pageSize,
    size: pageSize,
    where: where.length === 0 ? "1 = 1" : where.join(" AND "),
  };
}

/**
 * 标准化分页数据的返回格式
 * @author jinpengh
 *
 * @param {{ pageNo: Number; pageSize: Number; records: Array; total: Number; }} param0
 * @param {*} param0.pageNo
 * @param {*} param0.pageSize
 * @param {*} param0.records
 * @param {*} param0.total
 * @returns {{ current: any; size: any; pages: any; records: any; total: any; }}
 */
function standardizePageData({ pageNo, pageSize, records, total }) {
  pageNo = parseInt(pageNo || 1);
  pageSize = parseInt(pageSize || 10);
  return {
    current: pageNo,
    size: pageSize,
    pages: Math.ceil(total / pageSize),
    records,
    total,
  };
}

module.exports = {
  stringifySqlField,
  generatePageCondition,
  standardizePageData,
};

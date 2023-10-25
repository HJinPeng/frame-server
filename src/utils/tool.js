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


/**
 * 生成sql插入语句的SET部分
 * @author jinpengh
 *
 * @param {Array<String>} fileds 插入字段
 * @param {Object} info {[field]: value}
 * @returns {String}
 */
function generateInsertData(fileds, info) {
  const values = [];
  fileds.forEach(field => {
    if(info[field] !== undefined) {
      values.push(`${field} = '${info[field]}'`)
    }
  })
  return values.join(',')
}

/**
 * 格式转换：下划线，小驼峰
 * @author jinpengh
 *
 * @param {String} value 
 * @param {'LowerCamelCase' | 'Underline'} targetFormat 目标格式
 */
function transformKeyFormat(value, targetFormat) {
  if(!value) return value;
  switch(targetFormat) {
    case 'LowerCamelCase':
      return value.replace(/_([a-z])/g, function (match, char) {
        return char.toUpperCase();
      })
    case 'Underline': 
      return value.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    default:
      console.error(`第二个参数 targetFormat('LowerCamelCase' | 'Underline') 不能为空`)
      return value
  }
}


/**
 * 将对象的所有key转换为目标格式，如下划线，小驼峰
 * @author jinpengh
 *
 * @param {Object} obj 待修改对象
 * @param {'LowerCamelCase' | 'Underline'} targetFormat 目标格式
 * @returns {Object}
 */
function transformObjectKeysFormat(obj, targetFormat) {
  console.log("obj",obj);
  const result = {};
  for(let key in obj) {
    console.log('key', key, obj[key]);
    result[transformKeyFormat(key, targetFormat)] = obj[key]
  }
  return result;
}

/**
 * 将数组中的对象的所有key转为目标格式，如下划线，小驼峰
 * @author jinpengh
 *
 * @param {Array} arr 待修改数组
 * @param {'LowerCamelCase' | 'Underline'} targetFormat 目标格式
 * @returns {Array}
 */
function transformArrayObjectKeysFormat(arr, targetFormat) {
  return arr.map(item => transformObjectKeysFormat(item, targetFormat))
}


/**
 * 将 对象数组/对象 的key转为小驼峰
 * @author jinpengh
 *
 * @param {*} data
 * @returns {*}
 */
function underline2LowerCamelCase(data) {
  return Array.isArray(data) ? transformArrayObjectKeysFormat(data, 'LowerCamelCase') : transformObjectKeysFormat(data, 'LowerCamelCase')
}

/**
 * 将 对象数组/对象 的key转为下划线
 * @author jinpengh
 *
 * @param {*} data
 * @returns {*}
 */
function lowerCamelCase2Underline(data) {
  return Array.isArray(data) ? transformArrayObjectKeysFormat(data, 'Underline') : transformObjectKeysFormat(data, 'Underline')
}


module.exports = {
  stringifySqlField,
  generatePageCondition,
  standardizePageData,
  generateInsertData,
  underline2LowerCamelCase,
  lowerCamelCase2Underline
};

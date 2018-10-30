/**
 * Created by mac1 on 2018/10/30.
 */
const mysqlHelper = require('./../db/mysql-helper.js')

const listinfo = {
  async getListByUserId(args) {
    let sql = 'SELECT * FROM listTable WHERE userId = ?'
    let params = [args.userId]
    let result = await mysqlHelper.query(sql, params)
    return result
  }
}

module.exports = listinfo
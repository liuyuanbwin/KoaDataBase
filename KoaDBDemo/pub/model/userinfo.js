const mysqlHelper = require('./../db/mysql-helper.js')

const userinfo = {

   async add (args) {
       let sql =  'INSERT INTO userinfo(UserName, UserPass) VALUE(?, ?)'
       let params = [args.username, args.userpass]
       let result = await mysqlHelper.query(sql, params)
       return result
   },

   async getByUserName(args) {
       let sql = 'SELECT Id, UserName, UserPass FROM userinfo WHERE UserName = ?'
       let params = [args.username]
       let result = await mysqlHelper.query(sql, params)
       return result
   },

   async getCountByUserName(args) {
       let sql = 'SELECT COUNT(1) AS UserName FROM userinfo WHERE UserName = ?'
       let params = [args.username]
       let result = await mysqlHelper.query(sql, params)
       return result
   },

}

module.exports = userinfo
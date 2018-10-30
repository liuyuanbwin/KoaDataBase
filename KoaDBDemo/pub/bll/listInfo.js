const listModel = require('./../model/listInfo')
const retCode = require('./../utils/retcode')

const listinfo = {
  async getList(userId){
    let listResult = await listModel.getListByUserId({userId:userId})
    return listResult
  }
}

module.exports = listinfo
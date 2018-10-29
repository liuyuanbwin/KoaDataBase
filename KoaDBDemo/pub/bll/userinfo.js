const usermodel = require('./../model/userinfo.js')
const retCode = require('./../utils/retcode.js')

const userinfo = {

  /**
   * ע��
   * @param  {object} ctx   ������
   * @return {object}       ���
   */
  async register ( ctx ) {
    let form = ctx.request.body
    
    const args = {
        username: form.username,
        userpass: form.userpass
    }
        
    let result = {
        code: retCode.Success,    
        data: null
    }
    
    //��֤�ǿ�
    if(!args.username || !args.userpass){
        result.code = retCode.ArgsError        
        return result
    }

    //�����û����õ��û�����
    let userNumResult = await usermodel.getCountByUserName(args)

    //�û����ѱ�ע��
    if(userNumResult[0].UserNum > 0){
        result.code = retCode.UserExisted        
        return result
    }

    //����ע������
    let userResult = await usermodel.add(args)

    if(userResult.insertId <= 0){
        result.code = retCode.Fail        
        return result
    }

    return result
  },

  /**
   * ��¼
   * @param  {object} ctx   ������
   * @return {object}       ���
   */
  async login ( ctx ) {
    let form = ctx.request.body
    
    const args = {
        username: form.username,
        userpass: form.userpass
    }
        
    let result = {
        code: retCode.Success,    
        data: null
    }
    
    //��֤�ǿ�
    if(!args.username || !args.userpass){
        result.code = retCode.ArgsError        
        return result
    }

    //�����û����õ��û���Ϣ
    let userResult = await usermodel.getByUserName(args)

    //�û�������
    if(userResult.length == 0){
        result.code = retCode.UserNotExist        
        return result
    }
    
    console.log(userResult)

    //�û������������
    if(userResult[0].UserName != args.username || userResult[0].UserPass != args.userpass){
        result.code = retCode.UsernameOrPasswordError        
        return result
    }

    //���û�ID����Session��
    ctx.session = {id: userResult[0].Id}

    return result
  },

}

module.exports = userinfo
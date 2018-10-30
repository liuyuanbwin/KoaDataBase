const router = require('koa-router')()
const title = '首页'
const listBll = require('./../pub/bll/listInfo.js')

router.get('/', async (ctx, next) => {  
  console.log('INDEX ctx.session ' + JSON.stringify(ctx.session))
  //判断登录
  if(!ctx.session || !ctx.session.id){
    await ctx.redirect('/login')  
  }else{    
    const userId = ctx.session.id;
    let result = await  listBll.getList(userId)
    await ctx.render('todoList', {content:result})
  }  
})

module.exports = router
/**
 * Created by mac1 on 2018/10/30.
 */
const router = require('koa-router')()
const data = {
  title:'标题',
  titles:
  [
    '第一条',
    '第二条',
    '第三条'
  ]
}

router.get('/template', async (ctx, next) => {
  await ctx.render('template', data)
})

module.exports = router
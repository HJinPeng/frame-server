import dayjs from 'dayjs'

export default function () {
  return async function (ctx, next) {
    ctx.state.updateInfo = {
      updateBy: ctx.state.user?.account,
      updateByName: ctx.state.user?.realname,
      updateDateTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
    }
    ctx.state.createInfo = {
      createBy: ctx.state.user?.account,
      createByName: ctx.state.user?.realname,
      createDateTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
    }
    await next()
  }
}

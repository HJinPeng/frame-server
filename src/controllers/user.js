import { INIT_PASSWORD, TOKEN_TIME } from '../config/const.js'
import { getBcryptHash, compareBcrypt } from '../utils/bcrypt.js'
import userService from '../services/user.js'
import userRoleService from '../services/user-role.js'
import { setTokenToRedis } from '../utils/redis-util.js'
import { generateToken } from '../utils/token.js'

const user = {
  // 登录
  async login(ctx) {
    const { account, password } = ctx.request.body
    // account存在，判断密码是否正确
    let result = await userService.login(account)
    if (result) {
      // 比较密码是否一致
      const isSame = await compareBcrypt(password, result.password)
      if (isSame) {
        const roles = await userRoleService.getRolesInfoByUserId(result.id)
        const token = generateToken({
          userId: result.id,
          account: result.account,
          realname: result.realname
        })
        result.token = token
        result.roles = roles
        await setTokenToRedis(token)
        delete result.password
        ctx.body = result
      } else {
        ctx.throw(500, '密码不正确')
      }
    } else {
      ctx.throw(500, '用户不存在')
    }
  },

  // 根据token获取用户信息
  async getUserInfo(ctx) {
    const { userId } = ctx.state.user
    const [userInfo, roles] = await Promise.all([
      userService.getUserInfoById(userId),
      userRoleService.getRolesInfoByUserId(userId)
    ])
    if (userInfo) {
      ctx.body = {
        ...userInfo,
        roles
      }
    } else {
      ctx.throw(401, '用户不存在，请重新登录')
    }
  },

  // 获取用户分页列表
  async getUserPage(ctx) {
    const query = ctx.query
    let result = await userService.page(query)
    ctx.body = result
  },

  // 添加用户
  async addUser(ctx) {
    const { account, realname, roles } = ctx.request.body
    const createInfo = ctx.state.createInfo
    const exist = await userService.existAccount(account)
    if (exist) {
      ctx.throw(500, '账号已存在，请重新输入')
      return
    }
    // hash密码
    const hashPwd = await getBcryptHash(INIT_PASSWORD)
    let userId = await userService.addUser({ account, realname, password: hashPwd }, createInfo)
    await userRoleService.add(userId, roles, createInfo)
    ctx.body = '新增成功'
  },

  // 删除某用户
  async deleteUserById(ctx) {
    const id = ctx.params.id
    const updateInfo = ctx.state.updateInfo
    let result = await userService.deleteUserById(id, updateInfo)
    ctx.body = result
  },

  // 更新用户信息
  async updateUser(ctx) {
    const body = ctx.request.body
    const { id, account, roles } = body
    if (!id) {
      ctx.throw(500, '用户id为空')
      return
    }
    const exist = await userService.existAccount(account, id)
    if (exist) {
      ctx.throw(500, '账号已存在，请重新输入')
      return
    }
    const updateInfo = ctx.state.updateInfo
    const createInfo = ctx.state.createInfo
    let [userInfo, userRole] = await Promise.all([
      userService.updateUser(body, updateInfo),
      userRoleService.update(id, roles, createInfo)
    ])
    console.log(userInfo, userRole)
    ctx.body = '更新成功'
  },

  async getUserDetail(ctx) {
    const userId = ctx.params.id
    const [userInfo, roles] = await Promise.all([
      userService.getUserInfoById(userId),
      userRoleService.getRolesByUserId(userId)
    ])
    ctx.body = {
      ...userInfo,
      roles: roles.map((role) => role.roleId)
    }
  }
}

export default user

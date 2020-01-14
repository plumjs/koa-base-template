/*
 * @Author: Yu Chen
 * @Date: 2019-01-02 14:21:37
 * @Last Modified by: Yu Chen
 * @Last Modified time: 2019-01-06 14:35:08
 */

import { Context } from 'koa'
import { JwtError } from './jwt.error'

export function hasRoles(...roles: string[]) {
  return async (ctx: Context, next) => {
    for (const role of roles) {
      if (!ctx.request.auth.roles.includes(role)) throw new JwtError('03', 'no such role')
    }
    await next()
  }
}
// 多个角色, 只要符合一个便能通过
export function hasRolesOr(...roles: string[]) {
  return async (ctx: Context, next) => {
    let flag = false
    for (const role of roles) {
      if (ctx.request.auth.roles.includes(role)) flag = true
    }
    if (!flag) throw new JwtError('04', 'no such roles')
    await next()
  }
}

/*
 * @Author: Yu Chen
 * @Date: 2019-01-02 11:54:44
 * @Last Modified by: Yu Chen
 * @Last Modified time: 2019-01-02 14:17:40
 */

import { Context } from 'koa'
import { getHeaderToken } from './getHeaderToken'
import { verifyToken } from './verifyToken'
import { JwtError } from './jwt.error'

export function isAuthenticated() {
  return async (ctx: Context, next) => {
    const token = getHeaderToken(ctx)
    const decoded = await verifyToken(token)
    if (!decoded) throw new JwtError('01', 'auth error')
    ctx.request.auth = decoded
    await next()
  }
}

/*
 * @Author: Yu Chen
 * @Date: 2019-01-02 10:50:16
 * @Last Modified by:   Yu Chen
 * @Last Modified time: 2019-01-02 10:50:16
 */

import { Context } from 'koa'

export function getHeaderToken(ctx: Context): string | null {
  if (!ctx.headers.authorization || !ctx.headers.authorization.startsWith('Bearer '))
    return null
  return ctx.headers.authorization.substring(7)
}

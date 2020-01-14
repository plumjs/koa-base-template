/*
 * @Author: Yu Chen
 * @Date: 2019-01-02 10:50:09
 * @Last Modified by:   Yu Chen
 * @Last Modified time: 2019-01-02 10:50:09
 */

import { verify } from 'jsonwebtoken'
import { jwt } from '../config'

export function verifyToken(token: string): Promise<any> {
  if (!token) return Promise.resolve()
  return new Promise(resolve => {
    verify(token, jwt.secret, (error, decoded) => {
      if (error) return resolve()
      resolve(decoded)
    })
  })
}

import * as koa from 'koa'

declare module 'koa' {
  interface Request {
    auth: {
      /**
       * Auth id
       */
      id: string

      /**
       * Thirdparty providers
       */
      providers: Array<{
        name: string
        openid: string
      }>

      /**
       * Roles
       */
      roles: string[]

      /**
       * username
       */
      username: string

      /**
       * others
       */
      [k: string]: any
    }

    owns: boolean
  }
}

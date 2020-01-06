import { App } from './app'
import { router as studentRouter } from './api/student'

import { connect } from 'mongoose'
import { env } from './env'
  ; (async () => {
    await connect(
      env.mongoUri,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    )
    const app = App.create({})
    app.use(studentRouter.routes())
    app.start()
  })()

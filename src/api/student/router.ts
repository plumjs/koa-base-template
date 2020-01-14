import * as Router from 'koa-router'
import { create, update, findOne, findMany, del, patch } from './ctrls'
import { isAuthenticated, hasRoles } from '../../jwt'

const router: any = new Router({
  prefix: '/v1/students',
})

router.post('/', isAuthenticated(), hasRoles('admin'), create)
router.put('/', update)
router.patch('/', patch)
router.get('/:id', findOne)
router.get('/', findMany)
router.delete('/:id', del)

export { router }

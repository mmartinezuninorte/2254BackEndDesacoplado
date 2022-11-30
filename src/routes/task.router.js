import { Router } from 'express';
import { verifyToken } from '../middlewares/authJwt';

import * as taskCtrl from '../controllers/taskcontroller'

const router = Router()

router.post('/', verifyToken ,taskCtrl.newTask)

router.get('/', taskCtrl.findAllTask)

router.get('/search', taskCtrl.findByName)

router.get('/:id', taskCtrl.findOneTask)

router.delete('/:id', verifyToken ,taskCtrl.deleteTask)

router.put('/:id', verifyToken ,taskCtrl.updateTask)

export default router
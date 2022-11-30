import { Router } from 'express';
import Task from '../models/Task'

import * as taskCtrl from '../controllers/taskcontroller'

const router = Router()

router.post('/', taskCtrl.newTask)

router.get('/', taskCtrl.findAllTask)

router.get('/search', taskCtrl.findByName)

router.get('/:id', taskCtrl.findOneTask)

router.delete('/:id', taskCtrl.deleteTask)

router.put('/:id', taskCtrl.updateTask)

export default router
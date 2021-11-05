const express = require('express')
const fs = require('fs')
const router = express.Router()
const coursesdata = require('../controller/controller.js')


router.get('/',coursesdata.getallCourse)
router.get('/:id',coursesdata.getCourseById)
router.post('/',coursesdata.createCourse)
router.delete('/:id',coursesdata.deleteCourse)
router.put('/:id',coursesdata.updateCourse)
router.patch('/:id',coursesdata.updateCourseParti)
module.exports=router;
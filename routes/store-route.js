const express = require('express')
const router = express.Router()
const Controller = require('../controllers/store-control')

router.get('/store', Controller.getStoreList)

router.get('/store/add', Controller.getAddStore)
router.post('/store/add', Controller.postAddStore)

router.get('/store/edit/:id', Controller.getEditStore)
router.post('/store/edit/:id', Controller.postEditStore)

router.get('store/delete/:id', Controller.getDestroyStore)

module.exports = router
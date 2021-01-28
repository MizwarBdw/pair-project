const express = require('express')
const router = express.Router()
const Controller = require('../controllers/store-control')

router.get('/stores', Controller.getStoreList)

router.get('/stores/add', Controller.getAddStore)
router.post('/stores/add', Controller.postAddStore)

router.get('/stores/edit/:id', Controller.getEditStore)
router.post('/stores/edit/:id', Controller.postEditStore)

router.get('/stores/delete/:id', Controller.getDestroyStore)

router.post('/stores/postEvent', )

module.exports = router
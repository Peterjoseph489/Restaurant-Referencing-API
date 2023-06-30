const {
    newOrder,
    getAllOrder,
    getOrderById,
    updateOrder,
    deleteOrder
} = require('../controllers/controller')

const {newChops,
    getAllChops,
    getChopsById,
    updateChops,
    deleteChops
} = require('../controllers/chopsController')
const express = require('express')
const router = express.Router()

router.get('/book', getAllOrder)
router.get('/book/:id', getOrderById)
router.post('/book', newOrder)
router.put('/book/:id', updateOrder)
router.delete('/book/:id', deleteOrder)


// // route for Chops
router.post('/chops/:id', newChops)
router.get('/chops', getAllChops)
router.get('/chops/:id', getChopsById)
router.put('/chops/:id', updateChops)
router.delete('/:userId/chops/:chopsId', deleteChops)

module.exports = router
const express = require('express')
const router = express.Router()
const viewController = require('./viewController')
const dataController = require('./dataController')

// Index route
router.get('/', dataController.index, viewController.index)
// New route
router.get('/new', viewController.new)
// Delete
router.delete('/:id', dataController.destroy, viewController.redirectHome)
// Update
router.put('/:id', dataController.update, viewController.redirectShow)
// Create
router.post('/', dataController.create, viewController.redirectHome)
// Edit
router.get('/:id/edit', dataController.show, viewController.edit)
// Show
router.get('/:id', dataController.show, viewController.show)
// Buy
router.patch('/:id', dataController.buy, viewController.redirectShow)

module.exports = router
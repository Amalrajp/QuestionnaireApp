let express = require('express');
let router = express.Router();




let questionSetController = require('../controllers/question_sets.controller');

router.get('/', questionSetController.getSets)
router.post('/', questionSetController.createSet)
// router.put('/', questionSetController.updateSet)
// router.delete('/:id',questionSetController.removeSet)

module.exports = router;
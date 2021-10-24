var express = require('express');
var router = express.Router();

/* GET users listing. */
let questionController = require('../controllers/questions.controller');

router.get('/', questionController.getQuestions)
// router.post('/', questionController.createQuestion)
router.put('/', questionController.updateQuestion)
router.delete('/:id',questionController.removeQuestion)

module.exports = router;

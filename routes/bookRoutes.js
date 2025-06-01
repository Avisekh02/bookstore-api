const express = require("express");
const router = express();
const controller = require("../controllers/bookControllers");


router.post('/',controller.insertBook);
router.get('/',controller.getBook);
router.get('/:id',controller.getBookByID);
router.put('/:id',controller.updateBook);
router.delete('/:id',controller.deleteBook);

module.exports = router

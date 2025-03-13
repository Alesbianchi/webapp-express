//importo express e utilizzo la parte di routing
const express = require('express');
const router = express.Router();


// importo le funzioni del controller
const movieController = require('../controllers/moviesController');


//rotta CRUD dei post
// index
router.get('/', movieController.index);

// show
router.get('/:id', movieController.show);


// store
router.post('/:id/reviews', movieController.storeReview);


// esporto router
module.exports = router;
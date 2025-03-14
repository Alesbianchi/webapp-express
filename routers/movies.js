//importo express e utilizzo la parte di routing
const express = require('express');
const router = express.Router();

//importo il middleware multer
const upload = require('../middlewares/multer');


// importo le funzioni del controller
const movieController = require('../controllers/moviesController');


//rotta CRUD dei post
// index
router.get('/', movieController.index);

// show
router.get('/:id', movieController.show);


// store review
router.post('/:id/reviews', movieController.storeReview);

// store movie
router.post('/', upload.single('image'), movieController.store);

// esporto router
module.exports = router;
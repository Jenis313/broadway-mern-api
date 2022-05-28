const express = require('express');
const router = express.Router();

router.route('/')
.get((req, res) => {
    res.send('Hi this product page and you are viewing all of the products')
})
.post()

router.route('/search')
.get()

router.route('/:id')
.get()
.put()
.delete()

router.route('/search')
.get()

module.exports = router;
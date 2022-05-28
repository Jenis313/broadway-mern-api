const express = require('express');
const router = express.Router();

router.route('/')
.get((req, res) => {
    res.send('Hi this is brand page and you are viewing all of the brands list')
})

router.route('/:id')
.get()
.put()
.delete()

module.exports = router;
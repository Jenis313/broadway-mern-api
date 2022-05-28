const express = require('express');
const router = express.Router();

router.route('/')
.get((req, res) => {
    res.send('Hi this is order page and you are viewing all of the orders list')
})

router.route('/:id')
.get()
.put()
.delete()


module.exports = router;
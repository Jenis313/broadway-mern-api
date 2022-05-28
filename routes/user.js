const express = require('express');
const router = express.Router();

router.route('/')
.get((req, res) => {
    res.send('Hi this is user page and you are viewing all of the users list')
})

router.route('/:id')
.get()
.put()
.delete()


router.route('/search')
.get()

module.exports = router;
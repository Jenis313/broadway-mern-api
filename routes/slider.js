const express = require('express');
const router = express.Router();

router.route('/')
.get((req, res) => {
    res.send('Hi this is slider page and you are viewing all of the available slides')
})
.post()

router.route('/:id')
.get()
.put()
.delete()

module.exports = router;
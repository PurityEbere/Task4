const { Router } = require('express');
const postController = require('../controllers/post')
const router = Router()

router.get('/', postController.getAllPosts);
router.get('/:postid', postController.getPostById);
router.post('/', postController.createPost);

module.exports = router
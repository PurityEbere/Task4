const postModel = require('../models/post');

const getAllPosts = (req, res) => {
  postModel.getAllPosts((err, posts) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(posts);
  });
};

const getPostById = (req, res) => {
  const { postid } = req.params;
  postModel.getPostById(postid, (err, post) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  });
};

const createPost = (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).json({ message: 'Title and content are required' });

  postModel.createPost(title, content, (err, newPost) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newPost);
  });
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost
};

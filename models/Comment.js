const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  username: String,
  content: String,
  role: String,
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Comment', commentSchema);

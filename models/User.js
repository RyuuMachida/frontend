const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  logo: {
    type: String,
    default: '/assets/img/default-logo.png',
  },
  role: {
    type: String,
    default: 'Visitor',
  }
});

module.exports = mongoose.model('User', userSchema);

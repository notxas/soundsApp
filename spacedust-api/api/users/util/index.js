const bcrypt = require('bcryptjs');

const hashPassword = password => {
  return new Promise((resolve, reject) => {
    // Generate a salt at level 12 strength
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

const verifyPassword = (passwordAttempt, hashedPassword) => {
  return bcrypt.compare(passwordAttempt, hashedPassword);
};

const requireAdmin = (req, res, next) => {
  if (!req.user) {
    return res
      .status(401)
      .json({ message: 'There was a problem authorizing the request' });
  }
  if (req.user.role !== 'admin') {
    return res.status(401).json({ message: 'Insufficient role' });
  }
  next();
};

module.exports = { hashPassword, verifyPassword, requireAdmin };

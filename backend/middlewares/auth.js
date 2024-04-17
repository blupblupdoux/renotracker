const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.decode(token, process.env.SECRET_JWT_KEY)
    req.auth = {userId: decodedToken.userId}
    next();
  } catch (error) {
    res.status(401).json({error})
  }
}
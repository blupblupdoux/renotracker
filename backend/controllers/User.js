const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.register = async (req, res, next) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10)
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash
    })

    await user.save()

    res.status(201).json({ message: 'User created!' })
  } catch (error) {
    res.status(500).json({error})
  }
}

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if(!user) res.status(404).json({ message: 'Wrong credentials!' })

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
    if(!isPasswordValid) res.status(404).json({ message: 'Wrong credentials!' })

    const token = jwt.sign(
      {userId: user._id},
      process.env.SECRET_JWT_KEY,
      {expiresIn: '30d'}
    )

    res.status(200).json({ userId: user._id, token: token})
  } catch (error) {
    res.status(500).json({error})
  }
}
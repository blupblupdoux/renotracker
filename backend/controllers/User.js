const bcrypt = require('bcrypt')
const User = require('../models/User')

exports.login = (req, res, next) => {
  //
}

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
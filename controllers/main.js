const jwt = require('jsonwebtoken');
const { BadRequestError  } = require("../errors");


const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError('Provide email and password');
  }

  const id = new Date().getDate();

  const token = jwt.sign({ username, id }, process.env.JWT_SECRET, { expiresIn: '30d' });
  console.log(token);
  res.status(200).json({ msg: 'user created', token });
};


const dashboard = async (req, res) => {

  console.log(req.user)

  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({ msg: `Hello, ${req.user.username}`, secret: `Here is your athorized data, uopur lucky number id: ${luckyNumber} ` });

};


module.exports = {
  login,
  dashboard
};
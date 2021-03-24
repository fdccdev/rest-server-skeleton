const { response } = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const usersGet = async (req, res = response) => {
  const { paginate = 3, since } = req.query;
  if (paginate !== isNaN && since !== isNaN) {
    const [total, users] = await Promise.all([
      User.countDocuments({state: true}),
      User.find({ state:true})
      .skip(Number(since))
      .limit(Number(paginate))
    ])

    res.json({
      total,
      users
    });
  }
};

const usersPost = async (req, res = response) => {
  const { nombre, email, password, rol } = req.body;
  const user = new User({
    nombre,
    email,
    password,
    rol,
  });

  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(password, salt);

  await user.save();
  res.json({
    msg: "API #### Rest Service!",
    user,
  });
};

const usersPut = async (req, res = response) => {
  const { id } = req.params;
  const { _id, password, google, ...data } = req.body;

  //validar en db
  if (password) {
    const salt = bcrypt.genSaltSync(10);
    data.password = bcrypt.hashSync(password, salt);
  }

  const user = await User.findByIdAndUpdate(id, data);

  res.json(user);
};

const usersDelete = async (req, res = response) => {
  const {id} = req.params

  const user = await User.findByIdAndUpdate(id, {state: false});
  res.json({
    msg: 'User deactivate',
    id
  });
};

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersDelete,
};

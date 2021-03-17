const { response } = require("express");

const usersGet = (req, res = response) => {
  res.json({
    msg: "API GET - Controller",
  });
};

const usersPost = (req, res = response) => {
  const {nombre, edad} = req.body;
  res.json({
    msg: "API POST - Controller",
    nombre,
    edad
  });
};

const usersPut = (req, res = response) => {
  res.json({
    msg: "API PUT - Controller",
    query: req.query,
    data: req.params
  });
};

const usersDelete = (req, res = response) => {
  res.json({
    msg: "API DELETE - Controller",
  });
};

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersDelete,
};

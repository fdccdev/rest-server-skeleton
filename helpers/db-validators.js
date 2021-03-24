const Role = require("../models/role");
const User = require("../models/user");

const validaterRol = async (rol = "") => {
  const existRol = await Role.findOne({ rol });
  if (!existRol) {
    throw new Error(`El rol ${rol} no es un rol valido`);
  }
};

const validateEmail = async (email = "") => {
  const exiteEmail = await User.findOne({ email });
  if (exiteEmail) {
    throw new Error(`El correo ${email} ya se encuentra registrado`);
  }
};

const validateID =  async (id = "") => {
  const existId = await User.findById({ id });
  if(!existId){
    throw new Error(`El id: ${id} no se encuentra en nuestros registros`);
  }
}

module.exports = {
  validaterRol,
  validateEmail,
  validateID
};

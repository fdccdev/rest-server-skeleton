const { Router } = require("express");
const { check } = require("express-validator");
const { usersGet, usersDelete, usersPost, usersPut } = require("../controllers/users");
const { validateInputs } = require("../middlewares/validateInputs");
const { validaterRol, validateEmail, validateID } = require("../helpers/db-validators");
const router = Router();

router.get("/", usersGet);

router.post("/", [
    check('nombre', 'El nombre es obligatorio!').not().isEmpty(),
    check('email', 'El correo no es valido!').isEmail(),
    check('email').custom(validateEmail),
    check('password', 'El password es obligatorio!').not().isEmpty(),
    check('password', 'El password debe tener mas de 6 digitos').isLength({min: 6}),
    check('rol').custom(validaterRol),
    validateInputs
], usersPost);

router.put("/:id", [    
    check('id', `El ID no fue encontrado!`).isMongoId(),
    check('id').custom(validateID),
    validateInputs
], usersPut);

router.delete("/:id", [
    check('id', `El ID no fue encontrado!`).isMongoId(),
    check('id').custom(validateID),  
    // validateInputs  
], usersDelete);

module.exports = router;

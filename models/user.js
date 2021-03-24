const { Schema, model } = require('mongoose');
/* 
creando modelo de usuario
{
    nombre: 'xxxxxxx',
    correo: 'xxxxxxx',
    email: 'xxxxxxx@xxxxxx',
    avatar: '1234567899',
    role: 'ardt',
    estado: true | false,
    google: true | false,
    registros: [di1, id2, id3, id4]
}
*/

const UserSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    email: {
        type: String,
        required: [true, 'El correo es requerido'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'El password es requerido']
    },
    avatar: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        enum:['ADMIN_ROLE', 'USER_ROLE']
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

UserSchema.methods.toJSON = function() {
    const { __v, password, ...user } = this.toObject();
    return user;
}

module.exports = model( 'User', UserSchema );
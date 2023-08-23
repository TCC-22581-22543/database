import mongoose, { model } from 'mongoose';

const User = model('User', {
    nome: String,
    email: String,
    senha: String,
});

export default User;
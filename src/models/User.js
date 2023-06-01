import mongoose, { model } from 'mongoose';

const User = model('User', {
    _id: mongoose.Schema.Types.ObjectId,
    nome: String,
    email: String,
    senha: String,
});

export default User;
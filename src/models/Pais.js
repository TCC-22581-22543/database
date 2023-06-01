import mongoose, { model } from 'mongoose';

const Pais = model('Pais',{
    _id: mongoose.Schema.Types.ObjectId,
    nome: String
});

export default Pais;
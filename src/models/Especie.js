import mongoose, { model } from 'mongoose';

const Especie = model('Especie', {
    _id: mongoose.Schema.Types.ObjectId,
    nome: String,
    nome_cientifico: String,
    classificacao: String,
    tipo_alimentacao: String,
});

export default Especie;
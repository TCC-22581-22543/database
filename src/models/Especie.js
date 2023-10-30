import mongoose, { model } from 'mongoose';

const Especie = model('Especie', {
    _id: mongoose.Schema.Types.ObjectId,
    nome: String,
    nome_cientifico: String,
    classificacao: String,
    tipo_alimentacao: String,
    bioma: String,
    image_url: String,
    evolucao: String,
    situacao_atual: String,

});

export default Especie;
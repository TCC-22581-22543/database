import mongoose, { model } from 'mongoose';

const Evolucao = model('Evolucao', {
    _id: mongoose.Schema.Types.ObjectId,
    descricao: String,
    mudanca_fenotipa: String,
    mudanca_habito: String,
    id_especie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Especie'
    },
});

export default Evolucao;
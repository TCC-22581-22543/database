import mongoose, { model } from "mongoose";

const EvolucaoEspecie = model('Evolucao_Especie', {
    id_evolucao_especie: Number,
    id_especie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Especie'
    },
    id_evolucao: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Evolucao'
    }
})

export default EvolucaoEspecie;
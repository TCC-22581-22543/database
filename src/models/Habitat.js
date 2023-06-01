import mongoose, { model } from "mongoose";

const Habitat = model('Habitat', {
    _id: mongoose.Schema.Types.ObjectId,
    caracteristica: String,
    tipo: String,
    localizacao: String,
    id_pais: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pais'
    },
    id_clima: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clima'
    }
});

export default Habitat;
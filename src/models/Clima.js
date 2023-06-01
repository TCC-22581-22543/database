import mongoose, { model } from "mongoose";

const Clima = model('Clima', {
    _id: mongoose.Schema.Types.ObjectId,
    id_clima: Number,
    descricao: String,
    tipo: String,
    umidade: String,
    temperatura: String,
});

export default Clima;
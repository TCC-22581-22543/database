import mongoose, { model } from "mongoose";

const Anotacao = model('Anotacao',{
    titulo: String,
    texto: String,
    criado_em: Date,
    id_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

});

export default Anotacao;
import mongoose, { model } from 'mongoose';

const Habitat_Pais = model('Habitat_Pais',{
    id_habitat_pais: Number,
    id_habitat:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Habitat'
    },
    id_pais:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pais'
    },
});

export default Habitat_Pais;
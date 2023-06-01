import mongoose, { model } from "mongoose";

const Habitat_Clima = model('Habitat_Clima',{
    id_habitat_clima: Number,
    id_habitat:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Habitat'
    },
    id_clima:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clima'
    }
});

export default Habitat_Clima;
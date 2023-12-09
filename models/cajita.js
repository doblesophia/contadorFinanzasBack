import {model, Types, Schema} from "mongoose"

let collection = "cajitas"
let schema = new Schema ({
    name: {type: String, required: true},
    porcentaje: {type: Number, required: true}
},
{
    timestamps: true
})

let Cajita = model(collection,schema)

export default Cajita
import {Schema, model} from "mongoose"

const characterSchema = new Schema({
    fullName: {type: String, required: true, unique: true},
    species: {type: String, required: true},
    age: {type: Number, required: true},
    gender: {type: String, required: true},
    status: {type: String, required: true},
    image: {type: String, required: true, default: ""},
    occupation: {type: String, required: true}
},
{ timestamps: true }
)
const Character = model("Character", characterSchema);

export default Character
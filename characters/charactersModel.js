import {Schema, model} from "mongoose"

const CharacterSchema = new Schema({
    fullName: {type: String, required: true, unique: true},
    species: {type: String, required: true},
    age: {type: Number, required: true},
    gender: {type: String, required: true},
    status: {type: String, required: true},
    image: {type: String, required: true, default: ""},
    occupation: {type: String, required: true}
},
{ timestamps: true }
);

CharacterSchema.index({fullName: "text"})

CharacterSchema.set("toJSON" ,{
    transform(doc, ret){
        ret.id = ret._id
        delete ret._id
        delete ret.__v
        
    }})
const Character = model("Character", CharacterSchema);

export default Character
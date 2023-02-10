import Character from "./charactersModel.js"


// Definimos la función getCharacters, que trae los personajes de la data.
const getCharacters = (req, res)=>{
    Character.find().then((data)=>{
        !data.length? res.status(404).json({message: "not found"}) : res.status(200).json(data);
    }).catch((error)=> console.log(error))
    
};
// Definimos la función postCharacters, que registra un personaje en la base de datos.
const postCharacter = (req, res)=>{
   const newCharacter = new Character(req.body)
   newCharacter.save((error)=>{
    if (error){
        res.status(400).json({message: error.message})
    }else{
        res.status(200).json(newCharacter)
    }
   });
  
};
    
// Definimos la función deleteCharacter, que borra el personaje con el id de la req.
const deleteCharacterById = async (req, res)=>{
    try{
        const character = await Character.findByIdAndDelete(req.params.id);
        res.status(200).json({character: character.id, message: "El personaje ha sido eliminado"})

    }catch(error){
        res.status(404).json({message: "No hemos encontrado un personaje con ese id"})

    }
}

//Definimos la función changeCharacter con el id de la req para hacer cambios en el personaje.
const changeCharacter = async(req, res)=>{
    try{
        const character = await Character.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json({message: "El personaje ha sido modificado", personaje: character})

    }catch(error){
        res.status(404).json({message: "Usuario no encontrado"})

    }
}

export { getCharacters, postCharacter, deleteCharacterById, changeCharacter }
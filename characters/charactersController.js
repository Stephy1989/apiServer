import Character from "./charactersModel.js"

const imageCharacter_url = process.env.imageCharacter_url


// Definimos la función getCharacters, que trae los personajes de la data.
const getCharacters = (req, res)=>{
    Character.find().then((data)=>{
        !data.length? res.status(404).json({message: "not found"}) : res.status(200).json(data);
    }).catch((error)=> console.log(error))
    
};

const getCharactersByName = (req, res, next)=>{
    const {query} = req.params;
   
    Character.find({$text: {$search: query}}, (err, result)=>{
        if(err){
            return res.json(err.message)
        }else {
            return res.status(200).json({result})
        };
    });

};


// Definimos la función postCharacters, que registra un personaje en la base de datos.
const postCharacter = (req, res, authData)=>{
    let characterImage = ""
    if(req.file){
        characterImage = `${imageCharacter_url}${req.file.filename}`
    }
   const newCharacter = new Character({...req.body, image: characterImage})
   newCharacter.save((error)=>{
    if (error){
        res.status(400).json({message: error.message})
    }else{
        res.status(200).json(newCharacter)
    }
   });
  
};
    
// Definimos la función deleteCharacter, que borra el personaje con el id de la req.
const deleteCharacterById = async (req, res, authData)=>{
    try{
        const character = await Character.findByIdAndDelete(req.params.id);
        res.status(200).json({character: character.id, message: "El personaje ha sido eliminado"})

    }catch(error){
        res.status(404).json({message: "No hemos encontrado un personaje con ese id"})

    }
}

//Definimos la función changeCharacter con el id de la req para hacer cambios en el personaje.
const changeCharacter = async(req, res, authData)=>{
    try{
        const character = await Character.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json({message: "El personaje ha sido modificado", personaje: character})

    }catch(error){
        res.status(404).json({message: "Usuario no encontrado"})

    }
}

export { getCharacters, getCharactersByName, postCharacter, deleteCharacterById, changeCharacter }
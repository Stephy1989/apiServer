import Character from "./charactersModel.js"


// Definimos la función getTeams
const getCharacters = (req, res)=>{
    Character.find().then((data)=>{
        !data.length? res.json({message: "not found"}).status(404) : res.json(data).status(200);
        res.json(data);
    }).catch((error)=> console.log(error))
    
};
// Definimos la función postTeams
const postCharacter = (req, res)=>{
   const newCharacter = new Character(req.body)
   newCharacter.save((error)=>{
    if (error){
        res.status(400).json({message: error.message})
    }else{
        res.status(200).json(newCharacter)
    }
   });
   console.log(newCharacter)
 
};
    
// Definimos la función deleteTeams
const deleteCharacterById = (req, res)=>{
    res.send(`Borramos el personaje con el id proveniente de la request ${req.params.id}`)
}

export { getCharacters, postCharacter, deleteCharacterById }
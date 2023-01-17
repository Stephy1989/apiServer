import Character from "./charactersModel.js"


// Definimos la función getTeams
const getCharacters = (req, res)=>{
    Character.find().then((data)=>{
        !data.length? res.json({message: "not found"}).status(404) : res.json(data).status(200);
        res.json(data);
    }).catch((error)=> console.log(error))
    
};
// Definimos la función postTeams
const postCharacter = async (req, res)=>{
    const {fullName, species, age, gender, status, image, occupation} = req.body;
    const character = Character.find().where({fullName})
    if (character.length === 0){

        const newCharacter = new Character({
            fullName, species, age, gender, status, image, occupation
        })
        newCharacter.save((error)=>{
            if (error){
                console.log(error);
            }else {
                res.status(200).json(newCharacter)
            }
        })
    }
}
// Definimos la función deleteTeams
const deleteCharacterById = (req, res)=>{
    res.send(`Borramos el personaje con el id proveniente de la request ${req.params.id}`)
}

export {getCharacters, postCharacter, deleteCharacterById}
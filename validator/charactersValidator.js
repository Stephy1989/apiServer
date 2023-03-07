import validator from "express-validator";
const { body, validationResult } = validator;

const validationRulesCharacter = [

    body("fullName")
    .notEmpty().withMessage("Ingrese el nombre del personaje")
    .isLength({min: 2, max: 60}).withMessage("Mínimo 2 y máximo 60 caracteres")
    .isAlpha("es-ES", {ignore: " "}).withMessage("Solo caracteres alfabéticos"),
    body("species")
    .notEmpty().withMessage("Ingrese la especie")
    .isLength({min: 2, max: 60}).withMessage("Mínimo 2 y máximo 60 caracteres")
    .isAlpha("es-ES", {ignore: " "}).withMessage("Solo caracteres alfabéticos"),
    body("age")
    .notEmpty().withMessage("Ingrese la edad del personaje")
    .isLength({min: 2, max: 20}).withMessage("Mínimo 2 y máximo 20 caracteres")
    .isAlphanumeric().withMessage("Caracteres alfanuméricos"),
    body("gender")
    .notEmpty().withMessage("Ingrese el género del personaje")
    .isLength({min: 2, max: 60}).withMessage("Mínimo 2 y máximo 60 caracteres")
    .isAlpha("es-ES", {ignore: " "}).withMessage("Solo caracteres alfabéticos"),
    body("status")
    .notEmpty().withMessage("Ingrese el status del personaje")
    .isLength({min: 2, max: 60}).withMessage("Mínimo 2 y máximo 60 caracteres")
    .isAlpha("es-ES").withMessage("Solo caracteres alfabéticos"),
    body("occupation")
    .notEmpty().withMessage("Ingrese la ocupación del personaje")
    .isLength({min: 2, max: 60}).withMessage("Mínimo 2 y máximo 60 caracteres"),

    (req, res, next)=>{
        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json(error)
        }else{
           return next()
        }
    }

]
export default validationRulesCharacter
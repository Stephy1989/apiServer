import validator from "express-validator";
const { body, validationResult } = validator;

const validationRulesUser = [

    body("name")
    .notEmpty().withMessage("Debe ingresar su nombre")
    .isLength({min: 2, max: 50}).withMessage("Debe ingresar un nombre válido"),
    body("lastName")
    .notEmpty().withMessage("Debe ingresar su apellido")
    .isLength({min: 2, max: 50}).withMessage("Debe ingresar un apellido válido"),
    body("email")
    .notEmpty().withMessage("Debe ingresar su email")
    .isEmail().normalizeEmail().withMessage("Ingrese un email válido")
    .isLength({min: 2, max: 50}).withMessage("Ingrese un email válido")
    .trim(" "),
    body("password")
    .notEmpty().withMessage("Debe ingresar su contraseña")
    .isLength({min: 7}).withMessage("Su contraseña debe contener al menos 7 caracteres"),
    body("passwordConfirmation")
    .custom((value, { req })=>{
        if (value !== req.body.password){
            throw new Error("Las contraseñas deben coincidir")
        }
        return true;
    })


]
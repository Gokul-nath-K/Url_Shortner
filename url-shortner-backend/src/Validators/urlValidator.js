import { check, validationResult } from "express-validator";

export const validateUrl = [

    check('longUrl')
        .exists().withMessage('Long url does not provided').bail()
        .isURL().withMessage(`Enter a valid url`),

    (req, res, next) => {
        const error = validationResult(req);

        if (!error.isEmpty()) { 
            return res.json({ errors: error.array() });
        }
        next();
    }

]
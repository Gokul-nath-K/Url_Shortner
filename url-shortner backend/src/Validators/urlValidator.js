import { check, validationResult } from "express-validator";

export const validateUrl = [

    check('longUrl')
        .exists().withMessage('Long url does not provided').bail()
        .isEmpty().withMessage(`Url cannot be empty`)
        .isURL().withMessage(`Enter a valid url`),


    (req, res, next) => {
        const error = validationResult(req);

        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
        }
        next();
    }

]
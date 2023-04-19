import express from "express";

import { getUrl, shortenUrl } from "../Controllers/controller.js";
import { validateUrl } from "../Validators/urlValidator.js";

const router = express.Router();

router.post('/shorten',validateUrl, shortenUrl);
router.get('/:urlCode', getUrl);

export default router;
import express from "express";

import { getUrl, shortenUrl } from "../Controllers/controller.js";

const router = express.Router();

router.post('/shorten', shortenUrl);
router.get('/:urlCode', getUrl);

export default router;
import { service } from '../Services/service.js';


export const shortenUrl = async (req, res) => {

    const { longUrl } = req.body;
    res.json(await service.generateShortUrl(longUrl));

}

export const getUrl = async (req, res) => {

    const { urlCode } = req.params;
    let url = await service.getUrl(urlCode);

    if (url) {

        res.redirect(url.long_url)
    }
    else {

        res.json({ "error": "Url not found" })
    }
}



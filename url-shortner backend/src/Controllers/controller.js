import { Url } from '../Data/url.js'
import * as service from '../Data/service.js';
import { urls } from '../Models/urlShortner.js';

export const shortenUrl = async (req, res) => {

    const { longUrl } = req.body;
    res.json( service.generateShortUrl(longUrl) );
    
}

export const getUrl = (req, res) => {
    const { urlCode } = req.params;

    
}



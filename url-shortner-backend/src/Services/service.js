import { urls } from "../Models/url_shortner.model.js";
import shortid from "shortid";


const generateShortUrl = async (longUrl) => {

    const urlCode = shortid.generate(8);

    let url = [];
    await urls.findAll({
        where: {
            long_url: longUrl
        }
    }).then((res) => res[0] ? url = res[0].dataValues : url = []);


    if (url.length !== 0) {

        return url.short_url;
    }
    else {

        const shortUrl = `http://localhost:8080/url/${urlCode}`;

        let newUrl = await urls.create({
            long_url: longUrl,
            short_url: shortUrl,
            url_code: urlCode,
            date: new Date()
        })

        return newUrl.short_url;
    }
}

const getUrl = async (urlCode) => {

    let url;
    await urls.findAll({
        where: {
            url_code: urlCode
        }
    }).then((res) => url = res[0].dataValues);

    return url;
}



export const service = { generateShortUrl, getUrl };
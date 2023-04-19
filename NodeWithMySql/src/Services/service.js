import { urls } from "../Models/urlShortner";



export const generateShortUrl = async ( longUrl ) => {

    const urlCode = `LUKOG`;

    let url;
    await urls.findAll({
        where: {
            long_url: longUrl
        }
    }).then((res) => url = res);


    if ( !url ) {
        return url.shortUrl ;
    }
    else {

        const shortUrl = `http://localhost:8080/url/${urlCode}`;

        let newUrl = await urls.create({
            long_url: longUrl,
            short_url: shortUrl,
            url_code: urlCode,
            date: new Date()
        })

        return newUrl.short_url ;
    }
} 

export const getUrl = async () => {

    let url;
    await urls.findAll({
        where: {
            long_url: longUrl
        }
    }).then((res) => url = res);

    if (url.length !== 0) {

        res.redirect(url[0].longUrl)
    }
    else {
        request.json({
            "error": " Url not found"
        })
    }
}
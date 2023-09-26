import React, { useState } from "react";

function Home() {

    const [ url, setUrl ] = useState({});
    const [ error, setError ] = useState({});
    const [ shortUrl, setShortUrl ] = useState("");

    const handleUrlChange = (e) => {
        e.preventDefault();
        setUrl({ ...url, longUrl : e.target.value });
        console.log(url);
    }
    
    const ValidateUrl = ( url ) => {

        let error="";

        if( url.longUrl.includes("localhost") )  {
            error = "Invalid URL";
        }

        return error;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUrl({ ...url , longUrl : " " });
        setError( ValidateUrl( url) )

        if( error === "") {
            await fetch(`http://localhost:8080/url/shorten`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(url)
            }).then((res) => res.json()).then((data) => setShortUrl(data));
        }
        else {
            console.log("hello");
        }
    }
  return (
    <>
      <div className="container-fluid ">
        <div className="row vh-100 justify-content-center pt-lg-5">
          <div className="col-md-5 m-3">
            <div className="card p-5 bg-body-tertiary">
                <div className="card-title">
                    <p className="h3 px-lg-3">Paste the URL to be shortened</p>
                </div>
                <div className="card-body">
                    <form onSubmit={ handleSubmit }>
                        <div className="input-group">
                            <input type="url"  name="url" className="form-control" onChange={handleUrlChange} placeholder="Enter your url here" id="url-input" />
                            <button type="submit" className="btn btn-primary p-2 px-3" > Generate </button>
                        </div>
                    </form>
                </div>
                {
                    shortUrl ? "url present" : "url not present"
                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

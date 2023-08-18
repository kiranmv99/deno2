import { useEffect, useState } from "react";

const Translate1 = () => {
    let [languages,setLanguages]=useState(null)
    let[translatedtext,settranslatedText]=useState(" ")
    useEffect(()=>{
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': 'f96143fd05msh23151e38025937fp112ce2jsn66a46662de29',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	}
};

fetch(url,options)
.then((res)=>{return res.json()})
.then((googledata)=>{setLanguages(googledata.data.languages);})

 },[] )

 let translate=()=>{
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': 'f96143fd05msh23151e38025937fp112ce2jsn66a46662de29',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		q: 'Hello, world!',
		target: 'es',
		source: 'en'
	})
};

fetch(url,options)
.then((res)=>{return res.json()})
.then((data)=>{
    console.log(data.data.translations[0].translatedText)
    settranslatedText(data.data.translations[0].translatedText)
})
 }
    return ( 
        <div>
 <h1>Language Translator</h1>
            <hr />
            <textarea  id="input" cols="50" rows="7"></textarea>

           {languages!=null && <select id="lang">
                                    <option>--SELECT--</option>
                                    { languages.map((v,i)=>{ return(<option value={v.language} key={i}> { v.language } </option> ) }) }
                                </select>}

            <button onClick={translate}>Translate language</button>

            <textarea  id="output" cols="50" rows="7" value={translatedtext}>
                
            </textarea>
        </div>
     );
}
 
export default Translate1;
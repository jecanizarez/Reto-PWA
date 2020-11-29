import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
const md5 = require('md5');

function Joke(){
    const [heroes, setHeroes] = useState([]);

    useEffect(()=>{
        if(!navigator.onLine){
            if(localStorage.getItem("heroes") === "") {
                setHeroes("Loading...")
            } else {
                setHeroes(JSON.parse(localStorage.getItem("heroes")));
            }
        } else {
            const publickey = "6298112b37c91182153d10c76bc35bd4";
            const privatekey = "dbeca6d6acd79ab5a64c9978593cc5676c8bc1ce";
            const ts = new Date().getTime();
            const hash = md5(ts+privatekey+publickey);
            const url = "http://gateway.marvel.com/v1/public/characters?limit=10&ts="+ts+"&apikey="+publickey+"&hash="+hash;
            fetch(url).then(res=>res.json()).then(res=>{
                setHeroes(res.data.results);
                localStorage.setItem("heroes", JSON.stringify(res.data.results));
            })
        }
    }, []);


    return(
        <div className="row justify-content-center">
            {heroes.map(h => {return <Card heroe={h} key = {h.id}/>})}
        </div>
    );
        
    

}

export default Joke;
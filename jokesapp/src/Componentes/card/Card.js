import React from "react";


export default function Card(props) {
  return (
    <div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src={props.heroe.thumbnail.path+"."+props.heroe.thumbnail.extension} alt={props.heroe.name}/>
        <div className="card-body">
            <h5 className="card-title">{props.heroe.name}</h5>
        </div>
     </div>  
  );
}
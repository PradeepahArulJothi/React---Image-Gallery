import React from "react" 

function ImageCard(props){
return(
<>
<div className="card">
<img src={props.image}></img>

<div className="card-content">
<h2>{props.title}</h2>
<p>{props.description}</p>
</div>

</div>
</>

);
}


export default ImageCard
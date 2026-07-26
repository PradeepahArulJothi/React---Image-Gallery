import React from "react"
import "./App.css";
import imageData from "./data/imageData"
import ImageCard from "./component/ImageCard";


function App() {
return(
<>
<div className="container">
<h1>React Image Gallery</h1>
<h3>Welcome to my Nature Gallery! 🍃</h3>
<p>Browse a curated collection of beautiful nature photographs and experience the beauty of the outdoors through a responsive and interactive gallery.</p>

<div className="gallery">
  {imageData.map((item) => (
    <ImageCard key={item.id} image={item.image} title={item.title} description={item.description}></ImageCard>
  ))}
</div>
<h2 className="footer">Thank you for watching my image gallery</h2>
</div>
</>
);
}

export default App;



// function App() {
//   return <h1>Hello React</h1>;
// }

// export default App;
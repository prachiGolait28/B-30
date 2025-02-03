import React from 'react'
import { useState } from 'react'


const App = () => {
  const[images,setImage]=useState([])

const generateImage = ()=>{
const randomX = Math.random() * (window.innerWidth-100);
const randomY = Math.random()* (window.innerHeight-100);

  const newImage = {
    id:Date.now(),
    src : `https:picsum.photos/200/200?random=${Date.now()}`,
    alt : "Random Image",
    x : randomX,
    y : randomY,
  };

  setImage((prevImage)=>[...prevImage,newImage]);
}
  return (
    <div>
      <button onClick={generateImage}>click</button>
      {images.map((image)=>(
        <img
        key={image.id}
        src={image.src}
        alt={image.alt}
        style = {{position : 'absolute' , top:image.y,left:image.x}}
        />
      ))}
    </div>
  )
}

export default App


import React, { useState } from 'react';
import Navigation from './Component/navigation/Navigation';
import Logo from './Component/logo/Logo'
import ImageLinkForm from './Component/imageLinkform/ImageLinkForm'
import 'tachyons';
import './App.css';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js'
import Rank from './Component/rank/Rank';
import FaceRecogntion from './Component/facerecogntion/FaceRecogntion'


const ParticleOptions= {
  particles: {
      number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
      }, 
  },
}

const app = new Clarifai.App({
  apiKey: '45555cb576a343f39e89d08d6e5f31ae'
 });

function App() {
   var [input, onInputChange]=useState([]);
   var [imageURL, getImageURL]=useState('');
  var [FaceBox, calculateFaceBox]=useState('');

   calculateFaceBox=(resp)=>{
    FaceBox= resp.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("Input_img"); 
    const width= Number(image.width);
    const height= Number(image.height);
    console.log(width, height, FaceBox)
  }
   getImageURL=()=>{
     imageURL= useState.input //useState.input
     return imageURL
   }
   
  onInputChange=(event)=>{
    input=useState.input = event.target.value;
    return input;
  }

  var [submit, onButtonSubmit]=useState('')
  onButtonSubmit=()=>{
getImageURL()
     submit= app.models.predict(Clarifai.FACE_DETECT_MODEL, useState.input)
      .then(response => calculateFaceBox(response))
      .catch(err=> console.log(err)) ; 
      return submit;
        // there was an error
        // do something with response
        // console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
  }

  return (
    <div className="App">
      <Particles className= "particles-fix" params={ParticleOptions}/>
      <Navigation/>  
      <Logo />
      <Rank />
      <ImageLinkForm onButtonSubmit={onButtonSubmit} onInputChange={onInputChange} />  
      <FaceRecogntion imageURL={imageURL}/>
    </div>
  );
}

export default App;

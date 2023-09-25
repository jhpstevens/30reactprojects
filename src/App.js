import React, { StrictMode } from 'react';
import './App.css';

// import EsignatureApp from "./projects/01-e-signature-app/EsignatureApp";
// import RandomizeColors from "./projects/02-randomize-colors/RandomizeColors";
// import LikePhotoApp from "./projects/03-like-my-photo/LikePhotoApp";
// import TestimonialsApp from "./projects/04-testimonials-app/TestimonialsApp";
// import AlertApp from './projects/05-Alerts/AlertApp';
import TemperatureControllerApp from './projects/06-temperature-controller-app/TemperatureControllerApp';

function App() {
  return (
    <div className="App">
      {/* <EsignatureApp/> */}
      {/* <RandomizeColors /> */}
      {/* <LikePhotoApp/> */}
      {/* <TestimonialsApp /> */}
      {/* <AlertApp /> */}
      <TemperatureControllerApp />
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
 apiKey: '55cb530597574979a9ebd931f770e9dd'
});

const particleOptions = {
                particles: {
                  value: 30,
                  density: {
                    enable:true,
                    value_area: 800
                  }
                }
              }

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }


  calculateFaceLocation = (data) => {
    const clar = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage')
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clar.left_col * width,
      topRow: clar.top_row * height,
      rightCol: width - (clar.right_col * width),
      bottomRow: height - (clar.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
   this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    console.log('click');
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err)); 
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
          this.setState({route: route})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }

    this.setState({route: route})
  }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <Particles className='particles'
              params={particleOptions}
            />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/> 
        { this.state.route === 'home' 
          ? <div>
              <Logo /> 
              <Rank />
              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
              <FaceRecognition box={box} imageUrl={imageUrl}/>
            </div>
          : (
              route === 'signin' 
              ? <SignIn onRouteChange={this.onRouteChange} />
              : <Register onRouteChange={this.onRouteChange} />
            )
        }
      </div>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';
import Navigation from './Components/Navigation/Navigation';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import Rank from './Components/Rank/Rank';
import { Grid } from '@material-ui/core';
import './App.css';

const initialState = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
    }})
  }

  calculateFaceLocation = (data) => {
    const clar = data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(clar);
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
        fetch('https://ancient-dawn-65122.herokuapp.com/imageurl', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            input: this.state.input
        })
      })
      .then(response => response.json())
      .then(response => {
        if(response) {
          fetch('https://ancient-dawn-65122.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(response => response.json()) 
          .then(count => {
            this.setState(Object.assign(this.state.user, { entries: count }))
          })
          .catch(console.log)
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err)) 
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <Navigation 
          isSignedIn={isSignedIn} 
          onRouteChange={this.onRouteChange} 
          name={this.state.user.name} 
          entries={this.state.user.entries}
        />
         
        { route === 'home' 
          ? <Fragment>
              <Grid container justify="center" spacing={8}
                style={{
                  margin: 0,
                  width: '100%',
                }}
              >
                <Grid item> 
                    <Rank
                      entries={this.state.user.entries} 
                      onInputChange={this.onInputChange}
                      onButtonSubmit={this.onButtonSubmit}  
                      box={box}
                      imageUrl={imageUrl}
                    />
                </Grid>
              </Grid>
            </Fragment>

          : (
              route === 'signin' 
              ? <SignIn  loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            )
        }
      </div>
    );
  }
}

export default App;

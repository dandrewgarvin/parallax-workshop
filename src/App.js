import React, { Component } from 'react';

import CSSParallax from './CSSParallax/CSSParallax'
import StarWars from './StarWars/StarWars'
import MoarParallax from './MoarParallax/MoarParallax'

class App extends Component {
  render() {
    return (
      <div className="App" 
        // style to be used for the star wars example
        style={{background: '#000', height: '100vh'}}
        // style={{overflowY: 'scroll', overflowX: 'hidden', perspective: '2px'}}
      >
        {/* Tis the season! */}
        <StarWars />
        
        {/* simple css parallax images */}
        {/* <CSSParallax />  */}


        {/* parallax with javascript. boxes scroll at different speeds */}
        {/* <MoarParallax /> */}

      </div>
    );
  }
}

export default App;

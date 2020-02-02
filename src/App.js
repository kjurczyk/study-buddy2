import React, { Component } from 'react'
import logo from './uf_logo.png';
import './App.css';
import { UserSession } from 'blockstack'

import Landing from './Landing'
import SignedIn from './SignedIn'

class App extends Component {

  constructor() {
    super()
    this.userSession = new UserSession()
  }

  componentWillMount() {
    const session = this.userSession
    if(!session.isUserSignedIn() && session.isSignInPending()) {
      session.handlePendingSignIn()
      .then((userData) => {
        if(!userData.username) {
          throw new Error('This app requires a username.')
        }
        window.location = `/kingdom/${userData.username}`
      })
    }
  }

  render() {
    return (
      <main role="main">
          {this.userSession.isUserSignedIn() ?
            <SignedIn />
          :
            <Landing />
          }
      </main>
    );
  }
}

export default App


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>
//           Welcome to Study Buddy!
//         </h1>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Login
//         </a>
//         <p>
//           or
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Register
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import AppNavbar from './AppNavbar';
function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}
// class App extends Component {
//   render() {
//     return (
//       <Router>

//           <Navigation />
//           <Route path='/' exact={true} component={App} />
//           <SecureRoute path='/mycertificates' component={MyCertificates} />
//       </Router>
//     );
//   }
// }

export default withAuthenticator(App);
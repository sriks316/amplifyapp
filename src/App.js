import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import AppNavbar from './AppNavbar';
function App() {
  return (
    <div className="App">
      <AppNavbar/>
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
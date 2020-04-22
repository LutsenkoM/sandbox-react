import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import withApiService from './components/hoc/with-api-service'

import ApiService from './services/api-service';

import Header from './components/header';
import FeedLine from './components/feed-line';
import SignUp from './components/sign-up';


// class App extends Component {
//   apiService = new ApiService();
//
//   constructor() {
//     super();
//     this.state = {
//       showFeed: false,
//       showSignUp: true
//     }
//   }
//
//   componentDidMount () {
//     this.apiService.getUsers().then((response) => {
//       console.log('RES', response)
//     })
//   }
//
//   render() {
//     const { showFeed, showSignUp } = this.state;
//
//     return (
//       <div className="App">
//         <Header></Header>
//         {showFeed && <FeedLine />}
//         {showSignUp && <SignUp />}
//       </div>
//     );
//   }
// }


const App = ({ apiService }) => {
  apiService.getUsers().then((response) => {
    console.log('RES', response)
  })
  return <div>App</div>;
};

export default withApiService()(App);

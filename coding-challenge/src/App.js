import React, { Component } from 'react';
import './App.css';
import Layout from "./Componets/Layout/Layout"


class App extends Component {
  state = {
    isLoggedIn: false
  }
 
  render() {
    return (
      <div className="App">
        <Layout>
           
        </Layout>
         
      </div>
    );
  }
}

export default App;

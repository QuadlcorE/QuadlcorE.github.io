import React from 'react';
import './App.css';


// import firebase from 'firebase/app';
import 'firebase/firestore';
import Personalheader from './components/Personalheader/Personalheader';
import Home from './components/Home/Home';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div className="App webpage">
      <Navbar/>
      {/* <Personalheader/> */}
      <Home/>
      <section></section>
      <aside></aside>
      <footer></footer>
    </div>
  );
}

export default App;

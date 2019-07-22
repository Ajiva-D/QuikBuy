import React from 'react';
import './App.css';
import Header from "./components/Header";
import Hero from './components/Hero'
import PopularItems from './components/PopularItems'

function App() {
  return (
    <div className="App">
     <Header/>
		 <Hero/>
		<PopularItems/>
    </div>
  );
}

export default App;

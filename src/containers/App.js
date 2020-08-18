import React from 'react';
import '../App.css';
import MainContainer from './MainContainer'
import Nav from './Nav'
import CreateCard from '../components/CreateCard';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <CreateCard></CreateCard>
      <MainContainer></MainContainer>
    </div>
  );
}

export default App;

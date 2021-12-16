import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import Food from './components/Food';
import PeopleContainer from './components/PeopleContainer';
import Board from './components/Board';
import Pj from './components/Pj';



import bobcara from './assets/characters/bobface.png'
import safaricara from './assets/characters/safarigirlface.png'
import bob from './assets/characters/bob.png'
import safarigirl from './assets/characters/safarigirl.png'
import salooncara from './assets/characters/saloongirlface.png'
import saloongirl from './assets/characters/saloongirl.png'

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
      <Board/>
        <Pj nombre={'bob'} imagenDeCara={bobcara} imagen={bob}/>
        <Pj nombre={'safari'} imagenDeCara={safaricara} imagen={safarigirl} />
        <Pj nombre={'saloongirl'} imagenDeCara={salooncara} imagen={saloongirl}/>
      
      {/* <Person nombre="Brunete" imagenCompleta={safarigirl} imagenCara={safaricara}/>
      <Person nombre="Betunia"  imagenCompleta={bob} imagenCara={bobcara}/>
      <Person/>
      <Person/>
      <Person/> */}


      {/* <Food 
        hambre={true} 
        comida="queso" 
        number={8}
      />
      <Food hambre={false} comida="pito" number={0}/>
      <Food hambre={true} comida="palta" /> */}
    </>
  );
}

export default App;



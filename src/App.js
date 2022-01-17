import './App.css';
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
      <Board />
      <Pj 
      profesion={'taxiboy'} 
      nombre={'bob'} 
      imagenDeCara={bobcara} 
      imagen={bob} 
      fumador={false}
      />

      <Pj 
      profesion='puta' 
      nombre={'safari'} 
      imagenDeCara={safaricara} 
      imagen={safarigirl} 
      fumador={true}
      />

      <Pj 
      profesion='puta' 
      nombre={'saloongirl'} 
      imagenDeCara={salooncara} 
      imagen={saloongirl} 
      fumador={true}
      />

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



import './App.css';
import freeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import '../src/styles/Boton.css';
import Pantalla from '../src/componentes/Pantalla';
import BotonClear from '../src/componentes/BotonClear';
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [ input , setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  }
  
//quiero que no se pueda ingresar dos veces una expresion -+*/ osea una vez q escucho el evento se anulen esos botones(crear una constante 'anular expresion' darle un valor que sea - o + o / etc) 
//quiero pasar const resuldao a la otra manera de escribir if else

  const calcularResultado = () =>{ 
     if (input){
      setInput(evaluate(input));
    } else{
        alert('ingrese un valor');
    }
  };

  

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img src={ freeCampLogo} className='logo' alt='logo free'  />

      </div>
      <div className='contenedor-calculadora'>
          <Pantalla  input={input} />
          <div className='fila'>
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton manejarClick={agregarInput}>2</Boton>
            <Boton manejarClick={agregarInput}>3</Boton>
            <Boton manejarClick={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>4</Boton>
            <Boton manejarClick={agregarInput}>5</Boton>
            <Boton manejarClick={agregarInput}>6</Boton>
            <Boton manejarClick={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>7</Boton>
            <Boton manejarClick={agregarInput}>8</Boton>
            <Boton manejarClick={agregarInput}>9</Boton>
            <Boton manejarClick={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={calcularResultado}>=</Boton>
            <Boton manejarClick={agregarInput}>0</Boton>
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton manejarClick={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClear={() => setInput('') }  >
              Clear
            </BotonClear>
          </div>
      </div>
    </div>
  );
}

export default App;

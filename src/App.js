import './App.css';
import freeCampLogo from './img/freecodecamp-logo.png';
import Button from './components/Button';
import '../src/styles/Button.css';
import Display from './components/Display';
import ButtonClear from './components/ButtonClear';
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [ input , setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  }
  
//quiero que no se pueda ingresar dos veces una expresion -+*/ osea una vez q escucho el evento se anulen esos botones(crear una constante 'anular expresion' darle un valor que sea - o + o / etc) 
//quiero pasar const resuldao a la otra manera de escribir if else

  const calculateResult = () =>{ 
     if (input){
      setInput(evaluate(input));
    } else{
        alert('ingrese un valor');
    }
  };

  

  return (
    <div className='App'>
      <div className='logo-conteiner'>
        <img src={ freeCampLogo} className='logo' alt='logo free'  />

      </div>
      <div className='conteiner-calculator'>
          <Display  input={input} />
          <div className='row'>
            <Button handleClick={addInput}>1</Button>
            <Button handleClick={addInput}>2</Button>
            <Button handleClick={addInput}>3</Button>
            <Button handleClick={addInput}>+</Button>
          </div>
          <div className='row'>
            <Button handleClick={addInput}>4</Button>
            <Button handleClick={addInput}>5</Button>
            <Button handleClick={addInput}>6</Button>
            <Button handleClick={addInput}>-</Button>
          </div>
          <div className='row'>
            <Button handleClick={addInput}>7</Button>
            <Button handleClick={addInput}>8</Button>
            <Button handleClick={addInput}>9</Button>
            <Button handleClick={addInput}>*</Button>
          </div>
          <div className='row'>
            <Button handleClick={calculateResult}>=</Button>
            <Button handleClick={addInput}>0</Button>
            <Button handleClick={addInput}>.</Button>
            <Button handleClick={addInput}>/</Button>
          </div>
          <div className='row'>
            <ButtonClear handleClear={() => setInput('') }  >
              Clear
            </ButtonClear>
          </div>
      </div>
    </div>
  );
}

export default App;

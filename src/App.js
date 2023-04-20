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
  const [lastChar, setLastChar] = useState(''); // Guarda el último caracter

  const addInput = val => {
    if (val === '.' && input.includes('.')) return; // Para que no se agrege mas de un punto
    if (val === ',' && input.includes(',')) return; // Para que no se agrege mas de una coma
    if (val === '+' && lastChar === '+') return; // Para que no se agrege mas de un +
    if (val === '-' && lastChar === '-') return; // Para que no se agrege mas de un -
    if (val === '*' && lastChar === '*') return; // Para que no se agrege mas de un *
    if (val === '/' && lastChar === '/') return; // Para que no se agrege mas de un /
    //if (val === '=' && lastChar === '=') return; // Para que no se agrege mas de un =
    setInput(input + val);
    setLastChar(val);
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

  /*
  Cuando veas que hay un patron que se repite, por ejemplo los botones, tendrías que buscar siempre la forma
  en que eso se resuelva de manera mas dinámica, sin tener que andar escribiendo todo el tiempo lo mismo.
  En este caso fijate que yo identifiqué que los botones son todos caracteres, y que esos caracteres se pueden
  obtener de una cadena de texto. Entonces, en vez de escribir cada botón, lo que hice fue crear una cadena de
  texto con todos los caracteres que quería mostrar, y luego recorrer esa cadena de texto para crear los botones.
  El único botón con un método distinto es el de igual, porque ese tiene que llamar a una función distinta. Por
  eso hice una fonción onClick con el addInput por defecto, pero en caso de que el caracter sea igual, le asigno
  la función calculateResult. Y luego onClick es el que se le pasa al botón, y si el caracter es igual, onClick
  va a ser calculateResult, y si no, va a ser addInput.
  */
  const CHARACTERS = '123+456-789*=0./';
  const buildButtons = CHARACTERS.split('').map((char, index) => {
    let onClick = addInput;
    if (char === '=') {
      onClick = calculateResult;
    }
    return <Button key={index} handleClick={onClick}>{char}</Button>
  });

  

  return (
    <div className='App'>
      <div className='logo-conteiner'>
        <img src={ freeCampLogo} className='logo' alt='logo free'  />

      </div>
      <div className='conteiner-calculator'>
          <Display  input={input} />
          <div className='row'>
            {buildButtons}
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

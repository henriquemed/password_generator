import React, { useState} from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [characterLength, setCharacterLength] = useState(0)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  return (
    <div className='App'>
      <div className='container'>
       
        {/*TITULO*/}
        <h3 className='generator_header'>
            Password Generator
        </h3> 
        {/*SENHA QUE VAI SER GERADA*/}
        <div className='generator_password'>
          <h3>{password}</h3>
          {/*BOTAO PARA COPIAR A SENHA GERADA*/}
          <button className='copy_button'>
            <i className='far fa-copy'></i>
          </button>
        </div>
        <div className='generator'>
          
          {/*CHARACTER LENGTH*/}
          <div className='form-lenght'> 
            <label htmlFor='character-lenght'> Character Length </label> 
            <h4 id="value_lenght">{characterLength}</h4>
          </div>
           {/*BARRA DO CHARACTER LENGTH*/}
          <div>
            <input
              type='range' 
              min='0' 
              max='30' 
              step='1'
              value={characterLength}
              onChange={(e) => setCharacterLength(e.target.value)}
              id='range-character-lenght'
              name='range-character-lenght'
            /> 
          </div>
          
          {/*BOTAO PARA ATIVAR LETRAS MAIUSCULAS*/}
          <div className='form-group'>  
            <input
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              type='checkbox'
              id='uppercase-letters'
              name='uppercase-letters'
            /> 
            <label htmlFor='uppercase-letters'> Include Uppercase Letters</label>
          </div>

          {/*BOTAO PARA ATIVAR LETRAS MINUSCULAS*/}
          <div className='form-group'>  
            <input
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              type='checkbox'
              id='lowercase-letters'
              name='lowercase-letters'
            /> 
            <label htmlFor='lowercase-letters'> Include Lowercase Letters</label>
          </div>

          {/*BOTAO PARA INCLUIR NUMEROS*/}
          <div className='form-group'>  
            <input
               checked={includeNumbers}
               onChange={(e) => setIncludeNumbers(e.target.checked)}
              type='checkbox'
              id='include-numbers'
              name='include-numbers'
            /> 
            <label htmlFor='include-numbers'> Include Numbers</label>
          </div>

          {/*BOTAO PARA INCLUIR SIMBOLOS*/}
          <div className='form-group'>  
            <input
             checked={includeSymbols}
             onChange={(e) => setIncludeSymbols(e.target.checked)}
              type='checkbox'
              id='include-symbols'
              name='include-symbols'
            /> 
            <label htmlFor='include-symbols'> Include Symbols</label>
          </div>

          {/*DETERMINAR A FORÇA DA SENHA*/}
          <div className='strength'>
            <label htmlFor='password-strength'>STRENGTH</label>
          </div>

          {/*BOTAO PARA GERAR NOVA SENHA*/}
          <button className='generator_btn'> GENERATE {'->'} </button>

        </div>
      </div>
    </div>    
  )
}

export default App


/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/

import React, { useState} from 'react'
import './App.css'
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from './characteres'

function App() {
  const [password, setPassword] = useState('')
  const [characterLength, setCharacterLength] = useState(0)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState('');
  const [strengthBars, setStrengthBars] = useState([false, false, false, false]);



  {/*FUNÇÃO PARA GERAR UM SENHA ALEATORIAMENTE*/}
  const randleGeneratePassword = (e) => {
    let characterList = '';
  
    if (includeLowercase) {
      characterList = characterList + lowerCaseLetters;
    }
    if (includeUppercase) {
      characterList = characterList + upperCaseLetters;
    }
    if (includeNumbers) {
      characterList = characterList + numbers;
    }
    if (includeSymbols) {
      characterList = characterList + specialCharacters;
    }
  
    const newPassword = createPassword(characterList);
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };
  

  {/*FUNÇÃO PARA CRIAR A SENHA COM BASE NO TAMANHO DECLARADO EM LENGTH*/}
  const createPassword = (characterList) => {
    let password = ''
    const characterListLength = characterList.length

    for(let i =0; i< characterLength; i++){
      const characterIndex = Math.round(Math.random() * characterListLength)
      password = password + characterList.charAt(characterIndex) 
    }
    return password
  }

   {/*FUNÇÃO PARA CHECAR FORÇA DA SENHA*/}
   const checkPasswordStrength = (pwd) => {
    let strength = 'WEAK';
    let bars = [false, false, false, false];
    
    if (pwd.length >= 1 && pwd.length < 8) {
      strength = 'WEAK';
      bars = [true, false, false, false];
    } else if (pwd.length >= 8 && pwd.length < 16) {
      strength = 'MEDIUM';
      bars = [true, true, false, false];
    } else if (pwd.length >= 16 && pwd.length < 18) {
      strength = 'MEDIUM';
      bars = [true, true, true, false];
    } else if (pwd.length >= 18) {
      if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd) && /\d/.test(pwd) && /\W/.test(pwd)) {
        strength = 'STRONG';
        bars = [true, true, true, true];
      }
    }
    
    setPasswordStrength(strength);
    setStrengthBars(bars);
  };
  
  
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
              max='25' 
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
            <div className='strength-container'>
              <p>{passwordStrength}</p>
              <div className='strength-bars'>
                {strengthBars.map((isActive, index) => (
                  <div key={index} className={`strength-bar ${isActive ? 'active' : ''}`}></div>
                ))}
              </div>
            </div>
          </div>

          {/*BOTAO PARA GERAR NOVA SENHA*/}
          <button   
            onClick={randleGeneratePassword} 
            className='generator_btn'
            > GENERATE → 
          </button>
          
        </div>
      </div>
    </div>    
  )
}

export default App


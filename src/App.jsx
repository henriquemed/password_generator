
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='generator'>
          <h2 className='generator_header'>
            Password Generator
          </h2>
          <div className='generator_password'>
            <h3>Password</h3>
            <button className='copy_button'>
              <i className='far fa-file'></i>
            </button>
          </div>


          <div className='form-group'>  
            <input
              type='checkbox'
              id='uppercase-letters'
              name='uppercase-letters'
            /> 
            <label htmlFor='uppercase-letters'> Include Uppercase Letters</label>
          </div>

          <div className='form-group'>  
            <input
              type='checkbox'
              id='lowercase-letters'
              name='lowercase-letters'
            /> 
            <label htmlFor='lowercase-letters'> Include Lowercase Letters</label>
          </div>

          <div className='form-group'>  
            <input
              type='checkbox'
              id='numbers'
              name='numbers'
            /> 
            <label htmlFor='numbers'> Include Numbers</label>
          </div>

          <div className='form-group'>  
            <input
              type='checkbox'
              id='symbols'
              name='symbols'
            /> 
            <label htmlFor='symbols'> Include Symbols</label>
          </div>


          <div className='form-group'>
            <label htmlFor='password-strength'>STRENGTH</label>
          </div>

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

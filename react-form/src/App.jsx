import { useState } from 'react'
import './App.css'

function App() {

 const [name, setName] = useState('');

 const handleSubmit = (e) => {
  e.preventDefault();
  {/* This will clear the input after the submition*/}
  setName('')
  console.log('Name submitted correctly')
 }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="field">
            <label htmlFor='name'>Name:</label>
            <input 
            id="name"
            type='text' placeholder='Name' name='name' value={name} onChange={e => setName(e.target.value)} />
          </div>
          {/*taking into account the first patameter of the const is true, we can disable the button if it is empty */}
          <button disabled={!name} type='submit'>Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default App

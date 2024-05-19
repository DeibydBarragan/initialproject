import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [text, setText] = useState('');
  const [update, setUpdate] = useState('');

  const texOnChange = (e) => {
    setText(e.target.value);
  }

  const buttonOnClick = () => {
    setUpdate(text);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world, i'm Deibyd Barragán
        </p>
        <input type="text" placeholder="Type something" value={text} onChange={texOnChange}/>
        <button onClick={buttonOnClick}>Update text</button>
        <p>Input text: {text}</p>
        <p>Updated text: {update}</p>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react'
import Input from './components/input/Input';
import Button from './components/button/Button';

function App() {
  const [showDiv, setShowDiv] = useState(true)
  return (
    <div className="App">
      <Input showDiv={showDiv} />
      <Button />
    </div>
  );
}

export default App;

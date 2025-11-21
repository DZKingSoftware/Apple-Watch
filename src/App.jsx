import React, {useState} from 'react'
import './App.css';
import Carusel from './components/watch-carusel/Carusel';
import WatchDec from './components/WatchDec';

function App() {
  const [rotation, setRotation] = useState(0);
  const [color, setColor] = useState(0);

  const bg = [
    'white',
    '#B7F5FF',
    '#FFECC9',
    '#C1FFB7'
  ]

  const handleButton = (index) => {
    setRotation(-index * 90);
    setColor(index)
  }

  return (
    <div className='h-screen flex items-center justify-between px-8 py-3 overflow-hidden transition-colors duration-700' style={{ backgroundColor: bg[color] }}>
      <div className='info'>
        <WatchDec onRotate={handleButton} />
      </div>
      <div className='carusel mr-[-400px]'>
        <Carusel rotation={rotation} />
      </div>
    </div>
  )
}

export default App;
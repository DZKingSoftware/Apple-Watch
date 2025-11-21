import React, {useState} from 'react'
import './App.css';
import Carusel from './components/watch-carusel/Carusel';
import WatchDec from './components/WatchDec';

function App() {
  const [rotation, setRotation] = useState(0);

  const handleButton = (index) => {
    setRotation(-index * 90);
  }

  return (
    <div className='flex items-center justify-between px-8 py-3 overflow-hidden'>
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
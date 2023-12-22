import { useState } from 'react'
import { Object } from './components/Object'
import AppRoutes from './Routes'


function App() {
  const [objects, setObjects] = useState<string[]>([
    'Object 1',
    'Object 2',
    'Object 3'
  ])

  function createObject() {
    setObjects([...objects, 'a'])
  }
  
  return (
    <>
      <AppRoutes />
      {objects.map((object, index) => {
        return <Object key={index} text={object} />
      })}

      <button 
        onClick={createObject}
        style={{
          backgroundColor: '#8257e6',
          border: 0,
          padding: '6px 12px',
          color: '#fff'
        }}
        >
          Add Object
      </button>
    </>
  )
}

export default App

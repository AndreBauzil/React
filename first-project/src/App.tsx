import { useState } from 'react'
import { Object } from './components/Object'


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
      {objects.map((object, index) => {
        return <Object key={index} text={object} />
      })}

      <button onClick={createObject}>Add Object</button>
    </>
  )
}

export default App

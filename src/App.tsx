import { useState } from 'react'

function App() {
  const [count, setCount] = useState(10)
  
  const handlerCount = (count:number) => {
    setCount(count)
  }

  return (
    <div>
        
    
    </div>
  )
}

export default App



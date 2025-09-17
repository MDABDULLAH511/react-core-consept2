import './App.css'
import Counter from './counter'
import Batsman from './batsman'

function App() {

  function handleClick() {
    alert(`I'm Clicking`)
  }
  // Array function
  const handleClick2 = () => {
    alert(`I'm Clicking button 2`)
  }

  const handAdd = (num) => {
    const newNum = num + 5;
    alert(newNum)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Counter></Counter>


      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>

      <button onClick={() => handAdd(50)}> Click To Add </button>

      <Batsman></Batsman>


    </>
  )
}

export default App

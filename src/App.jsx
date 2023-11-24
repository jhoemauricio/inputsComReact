import { useState } from 'react';
import './App.css'


function App() {

//visualiza o valor e altera o valor pode definir um valor base ex: useState("jhoseph")
const [valor, setValor] = useState("Jhoseph");

const handleChange = (event)=>{
  //acessa o evento 'event', o  elemento alvo 'target' e o valor
  setValor(event.target.value)

  //o setValor altera o valor [valor, setValor]
}

  return (
   <div>
      <h1>Hello World Jhoseph!</h1>
      <input type="text" onChange={handleChange}/>
      {/* pode passar valor pre determinado para o input*/}
      <input type="text" value={valor}></input>
      <p>{valor}</p>
   </div>
  )
}

export default App

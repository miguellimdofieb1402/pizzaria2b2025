import {useState} from "react"

function App(){

  const [nome, setNome] = useState('Miguel')

  return (
    <div>
      <h3>Pizzaria 28</h3>
      <input className="nome"
      placeholder="digite seu nome..."
      onChange={(e)=>{setNome(e.target.value)}}
      name="nome"
      type="text" />
      <button className="botao" onClick={ ()=>alert(nome)}>
        CLIQUE AQUI
       </button>
      </div>
  ) 
}

export default App
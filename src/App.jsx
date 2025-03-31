import {useState} from "react"

function App(){

 
const Formulário = (props) => {

  const [nome, setNome] = useState('Miguel')


  return (
    <div>
      <h3>{props.titulo}</h3>
      <input className="nome"
      placeholder="digite seu nome..."
      onChange={(e)=>{setNome(e.target.value)}}
      name="nome"
      type="text" />
      <button className="botao" onClick={ 
        () => {
          if(nome.lenght > 0)
        alert(nome)
      else
      alert(props.mensagem)
    }
  }>



        CLIQUE AQUI
       </button>
      </div>
  )
}

  return (
    <div>
      <h3>Pizzaria 2B</h3>
      <Formulário titulo = "Nome" mensagem = "sardinhas" />
      <Formulário titulo = "E-mail" mensagem = "Coringão maior do Br"/>
      <Formulário titulo = "CPF" mensagem = "sem mundial"/> 
      <Formulário />
      </div>
  ) 
}

export default App
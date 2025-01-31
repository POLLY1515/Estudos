import { useState } from "react"

 export default function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  const [user, setUser] = useState({});

  function handleRegister(e){
    e.preventDefault(); //evita que o formulário seja recarregado
// quando o usuario clicar em registrar, cada campo recebera o valor correspondente
    setUser({
      nome,
      email,
      idade
    })

    if(nome === '' || email === '' || idade === ''){
      alert('Todos os campos são obrigatórios');
      return;
    }

    // Simulando o cadastro de dados
    console.log({nome, email, idade});

    // Limpando os campos
    setNome('');
    setEmail('');
    setIdade('');

  }

  return (
    <>
    <h1>Cadastrando usuário</h1>
<form onSubmit={handleRegister}>

  <label >Name:</label><br />
  <input
   placeholder="Digite seu nome"  
   value={nome} //valor que fica dentro do cammpo
   onChange={(e)=> setNome(e.target.value)}// dentro do e.target.value tem o que foi digitado
   /><br />


  <label >Email:</label><br />
  <input placeholder="Digite seu email"  
  value={email}
  onChange={(e) =>setEmail(e.target.value)}
  /><br />



  <label >Idade:</label><br />
  <input placeholder="Digite sua idade"
  value={idade}
  onChange={(e) =>setIdade(e.target.value)}
    /><br /><br />


  <button type="submit">Registrar</button>

  </form>     
  <br /><br />

  <div>
  <span>Bem vindo:{user.nome}</span><br />
  <span>Idade: {user.idade}</span><br />
  <span>Email: {user.email}</span><br />

  </div>

    </>
  )
}


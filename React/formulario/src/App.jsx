import { useEffect, useState } from "react";

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");


  useEffect(() => {
    const tarefasStorage = JSON.parse(localStorage.getItem('@tarefa'));

    if(tarefasStorage){
      setTarefas(tarefasStorage);
    }  //se o local storage tiver algum item com a chave '@tarefa', ele vai setar esse item
    // como tarefas inicial


  },[]);

//toda vez que a a plicacao for montada, o useefect sera chamado
  useEffect(() =>{
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  },[tarefas]);

  function handleRegister(e) {
    e.preventDefault(); //evita que o formulário seja recarregado

    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <>
      <h1>Tarefas</h1>
      <form onSubmit={handleRegister}>
        <label>Nome da tarefa:</label>
        <br />
        <input
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)} // dentro do e.target.value tem o que foi digitado
        />
        <br /><br />

        <button type="submit">Registrar</button>
      </form>
      <br />
      <br />

      <ul>
        {tarefas.map((tarefa) => (
         // <div key={tarefa.id}>{tarefa.nome}</div>
         <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </>
  );
}

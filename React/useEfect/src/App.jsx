
import { useEffect, useState } from 'react';
import './App.css'



function App() {

  const [counter, setCounter] = useState(0);

  //O useEfect recebe como primeiro parametro uma funcao
  useEffect(() =>{
    // ComponentDidUpdate executa toda vez que o componente atualiza
    console.log("componentDidUpdate");

  });

  useEffect(()=>{
    //componentDidMout executa uma vez
    console.log("componentDidMout");
  },[]);//Aqui se passar um array vazio, o componente executa apenas 1 vez
  // É executado apenas uma vez por nao ter dependencias


  useEffect(()=>{
//useEfect com dependencia
//Executa toda vez que a dependencia mudar
//Nesse caso, toda vez que o couter mudar, essa funcao sera chamada
    console.log("Contador mudou para: ", counter);
    //Quando usar uma variavel aqui dentro, devo passar como dependencia nos colchetes
    //se nao passar dara erro 
  },[counter]);

return(
  <>
    <h1>
      Contador:{counter}
      <button
       onClick={()=>setCounter(counter + 1)}>+
       </button>
    </h1>

  </>
);
    
  
}

export default App

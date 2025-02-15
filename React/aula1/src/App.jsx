
import './App.css'

/**Stateles components 
 * Só funciona sem chaves quando é apenas uma linha de codigo
 * Esse ipo de componente nao possui estado
 * Caso seja mais de uma linha deve colocar o return 
 * 
*/
const BemVindo = ()=> <h2>Bem vindo(a)</h2>

/**Usando props */

const Ola = (props)=>{
  return(
    <>
      <h1>Bem vindo(a) {props.name}</h1>
      <h2>Você tem {props.idade} anos</h2>
    </>
    
  );
}

function App() {
  return(
    <div>
      <BemVindo/>
      <h1>ser humano</h1>
      <Ola name ="Poliana" idade="32" />
      <Ola name="Isaias" idade="35"/>
    </div>
  );
    
  
}

export default App

import './style.css';

export default function MyForms(){
    return(
        <div>
            {/*Criação de forms*/}
            <form>
                <div>
                    
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Digite seu nome" />
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </div>
);
}
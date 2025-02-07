import { Link } from 'react-router-dom';
import './menu.css';

export default function Menu(){
    return(
        <div className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                    <Link to="/param/id">Param #01</Link>
                    </li>
                    <li>
                    <Link to="/">Param #02</Link>
                    </li>
                    <li>
                    <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                    <Link to="/naoExiste">Não Existe</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
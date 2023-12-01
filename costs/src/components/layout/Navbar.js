import { Link } from "react-router-dom"
import Conteiner from "./Conteiner"
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar() {
    return (
        <nav>
            <Conteiner>
                <Link to="/">
                    <img src={logo} alt="Costs"/>
                </Link>
                <Link to="/">Home</Link>
                <Link to="/contact">Contato</Link>
                <Link to="/company">Empresa</Link>
                <Link to="/newproject">Novo Projeto</Link>
            </Conteiner>
        </nav>
    )
}

export default Navbar
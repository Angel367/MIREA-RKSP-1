import '../styles/header.css'; // Подключаем CSS файл
import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <img className={'logo'} alt={'logo'} src='logo.png'></img>
            <nav>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/labs">Поиск лабораторий</Link></li>
                    <li><a href="#">Поиск услуг</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

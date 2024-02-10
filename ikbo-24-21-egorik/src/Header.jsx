import './styles/header.css'; // Подключаем CSS файл

function Header() {
    return (
        <header>
            <img className={'logo'} alt={'logo'} src='logo.png'></img>
            <nav>
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Услуги</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

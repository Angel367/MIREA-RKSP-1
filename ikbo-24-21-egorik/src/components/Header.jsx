import '../styles/header.css'; // Подключаем CSS файл

function Header() {
    return (
        <header>
            <img className={'logo'} alt={'logo'} src='logo.png'></img>
            <nav>
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Поиск лабораторий</a></li>
                    <li><a href="#">Поиск услуг</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

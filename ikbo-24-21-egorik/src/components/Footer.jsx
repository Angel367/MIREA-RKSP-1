import '../styles/footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__links">
                    <ul>
                        <li><a href="#about">О нас</a></li>
                        <li><a href="#services">Услуги</a></li>
                        <li><a href="#labs">Медицинские лаборатории</a></li>
                        <li><a href="#faq">Часто задаваемые вопросы</a></li>
                        <li><a href="#contacts">Контакты</a></li>
                    </ul>
                </div>
                <div className="footer__contact-info">
                    <p>Контактная информация: </p>
                    <p>Адрес: ул. напримерная, дом 123</p>
                    <p>Телефон: +7 (123) 456-78-90</p>
                    <p>Email: info@example.com</p>
                </div>
                <div className="footer__social-links">
                    <p>Мы в социальных сетях:</p>
                    <ul>
                        <li><a href="https://www.facebook.com/example">Facebook</a></li>
                        <li><a href="https://twitter.com/example">Twitter</a></li>
                        <li><a href="https://www.instagram.com/example">Instagram</a></li>
                    </ul>
                </div>
                <div className="footer__legal-links">
                    <ul>
                        <li><a href="#privacy">Политика конфиденциальности</a></li>
                        <li><a href="#terms">Пользовательское соглашение</a></li>
                    </ul>
                </div>
                <div className="footer__partners">
                    <p>Партнеры:</p>
                    <ul>
                        <li><a href="https://partner1.example.com">Партнер 1</a></li>
                        <li><a href="https://partner2.example.com">Партнер 2</a></li>
                    </ul>
                </div>
                <div className="footer__resources">
                    <p>Полезные ресурсы:</p>
                    <ul>
                        <li><a href="https://healthorganization.example">Организация здравоохранения</a></li>
                        <li><a href="https://blog.example.com">Блог</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

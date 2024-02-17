import '../styles/body.css'; // Подключаем CSS файл

function MainBody(props) {
    return (
        <div className="body-container">
            <h1>Добро пожаловать на агрегатор медицинских лабораторий</h1>
            <p>Здесь вы можете найти информацию о лабораториях, их услугах, расположении и отзывах.</p>
            <p>Ищите ближайшие к вам лаборатории, сравнивайте цены и выбирайте лучшее для ваших потребностей.</p>
            <br></br>
                {props.propName}
        </div>
    );
}

export default MainBody;

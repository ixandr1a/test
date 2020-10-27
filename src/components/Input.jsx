import React from 'react';
import axios from 'axios';

function Input() {
    const [inp, setInp] = React.useState('30');
    const [check, setCheck] = React.useState(false);

    const onEnter = (e) => {
        e.preventDefault();
        if (check != true) {
            alert('Выберите чекбокс')
        }
        axios.post('/', {
            inp,
            check
        });
    }


    return (
        <div className="form-wrapper">
            <h1>Pro</h1>
            <p>от 30 000 подписчиков</p>
            <form className="form">
                <span className="sss">{inp}</span>
                <input type="range" min="30" max="200" className="inp-range" value={inp} onChange={(e) => setInp(e.target.value)} />
                <p>Отсутствие ссылки "Работает с помощью Push.Gun" <br/> в окне запроса подписки</p>
                <p>Приоритетная поддержка</p>
                <input type="checkbox" className="check" onClick={() => check === false ? setCheck(true) : setCheck(false)} />
                <span>Подписка на год -20%</span>
                <button onClick={onEnter} className="btn">Купить</button>
            </form>
        </div>
    )
}



export default Input

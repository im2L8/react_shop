import circleimg from '../img/Logo-circle.svg';

function Header() {
    return <header>
        <div className="logo">
            <h3 className='logo-text'>React Shop</h3>
            <img src={circleimg} alt="" className='logo-img' />
        </div>
        <button className="repository-btn">Войти</button>
    </header>
}

export { Header };
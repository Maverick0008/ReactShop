import { Link } from 'react-router-dom'
function Header(props) {
    return (
        <header className="d-flex justify-between align-center ">
            <div className="d-flex  align-center">
                <div >
                    <Link to="/">
                    <h3 className="text-uppercase">Galaxy Vinyl</h3>
                    <p className="opacity-5">Vinyl record store</p>
                    </Link>
                </div>
            </div>
            <ul className="d-flex cu-p align-center">
                <Link to="/favorites">
                    <img width={30} height={30} src="/img/pageFavorite.svg" alt="pageFavorite" />
                </Link>
           
                <li onClick={props.onClickCart} className="d-flex align-center mr-30">
                    <img width={33} height={33} src="/img/cardAdd.svg" alt="cart" />
                    <span>43$</span>
                </li>
            </ul>
        </header>
    )
}
export default Header;

function Header() {
    return (
        <header className="d-flex justify-between align-center p-35">
            <div className="d-flex  align-center">
                <img width={70} height={70} src="/img/logo.png" />
                <div>
                    <h3 className="text-uppercase">Galaxy Vinyl</h3>
                    <p className="opacity-5">Vinyl record store</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30"><img width={20} height={20} src="/img/cart.svg" /><span>25$</span></li>
                <li><img width={20} height={20} src="/img/user.svg" /></li>
            </ul>
        </header>
    )
}
export default Header;
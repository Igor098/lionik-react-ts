import logo from '../assets/logo.svg'

function Logo() {
    return(
        <div className="header-logo">
            <a className="header-logo__link" href="#">
                <img className="header-logo__img" src={logo} alt="логотип"/>
            </a>
        </div>
    )
}

export default Logo
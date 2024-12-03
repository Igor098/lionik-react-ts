import logo from '../assets/images/logo/logo.svg'
import logoSmall from '../assets/images/logo/logo_small.svg'

const Logo = () => {
    return(
        <div className="logo">
            <a className="logo__link" href="#">
                <picture>
                    <source srcSet={logoSmall} media="(max-width: 480px)"/>
                    <img className="logo__img" src={logo} srcSet={logo} alt="логотип"/>
                </picture>
            </a>
        </div>
    )
}

export default Logo
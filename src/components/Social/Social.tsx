import './Social.scss'
import { footerSocial } from '../../assets/data.ts'
import { ReactSVG } from "react-svg";


const Social = () => {
    return (
        <div className="footer-social">
            {
                footerSocial.map((social, index) => {
                    return (
                        <a key={social} className="footer-social__link" href="#">
                            <ReactSVG
                                src={social}
                                className={`footer-social__img ${index === 2 ? 'footer-social__img_stroke' : 'footer-social__img_fill'}`}
                            />
                        </a>
                    )
                })
            }
        </div>
    )
}

export default Social;
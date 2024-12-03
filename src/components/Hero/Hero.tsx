import './Hero.scss'
import Button from "../Button/Button";

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="container">
                <div className="hero-wrapper">
                    <h1 className="hero__title main-title">This is simply a smarter way to make your legal online</h1>
                    <p className="hero__desc section-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                    <div className="button-container">
                        <Button text={'Free 30 day trial'} style={'large'}/>
                        <span className="hero__secure-text">SSL secured connection</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
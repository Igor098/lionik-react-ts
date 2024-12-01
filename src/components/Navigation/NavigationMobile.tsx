import './Navigation.scss'
import '../../styles/variables.scss'
import {routes} from '../../assets/routes'
import {useRef, useState} from "react"
import {useClickAway} from "react-use";
import {Squash as Hamburger} from 'hamburger-react'
import {AnimatePresence, motion} from "framer-motion";
import Link from "../Link/Link.tsx";

const NavigationMobile = () => {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);
    useClickAway(ref, () => setOpen(false));
    return (
        <div ref={ref} className="hamburger">
            <Hamburger toggled={isOpen} size={20} toggle={setOpen} color={`#3172B9`} rounded={true}/>
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="nav">
                        <ul className="nav__list list-reset">
                            {routes.map((route, index) => {
                                const { title, href } = route;

                                return (
                                    <motion.li
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                            delay: 0.1 + index / 10,
                                        }}
                                        key={title}
                                        onClick={() => setOpen((prev) => !prev)}
                                        className={`header-nav__item_style_mobile`}
                                    >
                                        <Link text={title} href={href} style='' />
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
            </div>
    )
}

export default NavigationMobile;
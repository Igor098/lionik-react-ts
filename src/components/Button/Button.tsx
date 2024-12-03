import styles from './Button.module.scss'

interface Props {
    text: string;
    style: string;
}

const Button = ({text, style}: Props) => {
    const classes = style.includes('large') && styles.large
    return (
        <button className={`${styles.button} ${classes} btn-reset`}>{text}</button>
    )
}

export default Button;
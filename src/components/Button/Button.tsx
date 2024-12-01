import styles from './Button.module.scss'

interface Props {
    text: string;
}

function Button({text}: Props) {
    return (
        <button className={`${styles.button} btn-reset`}>{text}</button>
    )
}

export default Button;
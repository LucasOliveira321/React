import styles from './Button.module.css';

interface ButtonProps{
    text: string;
    type: "button"|"submit"|"reset";
    id: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    loading: boolean;
}

const Button = ({text, type, id, onClick}: ButtonProps) => {
    return (
        <div>
            <button id={id} className={styles.button} type={type} onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button;
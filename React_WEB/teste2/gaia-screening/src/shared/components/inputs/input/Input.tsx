import styles from './Input.module.css';

interface InputProps{
    label:string;
    type:string;
    id:string;
    placeholder?:string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const Input = ({label, type, id, placeholder, onChange, value}: InputProps) => {
    return (
        <div className={styles.div_input}>
            <label className={styles.label_input}>{label}</label>
            <input 
                className={styles.input} 
                type={type} 
                name={id} 
                id={id} 
                placeholder={placeholder} 
                onChange={onChange} 
                value={value}
            ></input>
        </div>
    )
}

export default Input
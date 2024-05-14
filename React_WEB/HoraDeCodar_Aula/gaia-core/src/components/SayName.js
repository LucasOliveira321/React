import PropTypes from 'prop-types';
import styles from './SayName.module.css';

function SayName(
    {
        nome = 'Falta o nome', 
        idade = 'Não', 
        profissao = 'Precisa preencher'
    }){
    return(
        <div>
            <h2 className={styles.ColorLeter}>{nome}</h2>
            <h2>{idade}</h2>
            <h2>{profissao}</h2>
        </div>
    )
}

SayName.propTypes = {
    nome: PropTypes.string,
    idade: PropTypes.number,
    profissao: PropTypes.string
}

export default SayName;
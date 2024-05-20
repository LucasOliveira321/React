import styles from './Modal.module.css';

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    title: string;
    content: string;
}

export const Modal = ({isOpen, onClose, title, content}:ModalProps) => {

    if(!isOpen){
        return null;
    }
    return (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
                <span className={styles.close} onClick={onClose}>&times;</span>
                <h2>{title}</h2>
                <div className={styles.separator}></div>
                <p>{content}</p>
            </div>
        </div>
    );
    
}

// HOW TO USE MODAL

// MODAL
// const [isOpenModal, setIsOpenModal] = useState(false);
// const closeModal = () => setIsOpenModal(false);
// const showLogs = () => {
//     setIsOpenModal(true);
// };


{/* <Button loading={true} text='ENTRAR' type='submit' id='login' onClick={showLogs}/> */}
{/* <Modal title='Modal' content='Conteudooooooo' isOpen={isOpenModal} onClose={closeModal}/> */}
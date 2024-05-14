import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer(){
    return (
    <footer>
        <ul className={styles.socialList}>
            <li><FaFacebook/></li>
            <li><FaLinkedin/></li>
            <li><FaGithub/></li>
        </ul>
    </footer>
)
}

export default Footer
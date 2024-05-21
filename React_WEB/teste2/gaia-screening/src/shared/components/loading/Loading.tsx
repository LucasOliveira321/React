import { useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { useEffect } from 'react';

import { getAuthorizationToken } from '../../functions/connection/auth';
import styles from './Loading.module.css';
import { ProductRoutesEnum } from '../../../modules/product/routes';
import { LoginRoutesEnum } from '../../../modules/login/routes';



const Loading = () => {
    const navigate = useNavigate();
    const token = getAuthorizationToken();

    useEffect(() => {
        if(token){
            navigate(ProductRoutesEnum.PRODUCT);
        }else{
            navigate(LoginRoutesEnum.LOGIN);
        }
    }, [])
    


    return (
        <div
            id='loading'
            className={styles.loading_overlay}
        >
            <FaSpinner className={styles.spinner} />
        </div>
    )
}

export default Loading;
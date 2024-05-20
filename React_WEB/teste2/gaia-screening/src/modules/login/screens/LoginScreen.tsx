import { useState } from 'react';
import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import styles from '../styles/LoginScreen.module.css';
import SVGLogoGaiaHorizontal from '../../../shared/components/icons/SVGLogoGaiaHorizontal';
import '../styles/LoginScreen.module.css';
import { useRequests } from '../../../shared/hooks/useRequests';
import { UserType } from '../types/UserType';
import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';


const LoginScreen = () => {
    // const { accessToken, setAccessToken } = useGlobalContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(event.target.value);
    }
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(event.target.value);
    }

    const show = () => {
        console.log(email);
        console.log(password);
    }

    // POST REQUEST
    // const { postRequest } = useRequests();
    // const handleLogin = async () => {
    //     console.log(email);
    //     console.log(password);
    //     const user = await postRequest<UserType>('http://localhost:5002/api/v0/login', {
    //         email: email,
    //         password: password
    //     });
        
    //     setAccessToken(user?.accessToken || '');
    // }

    return (
        <div className={styles.container_login_screen}>
            <div className={styles.container_login}>
                <div className={styles.div_logo}>
                    <SVGLogoGaiaHorizontal />
                    <h1 className={styles.title}>LOGIN</h1>
                    <Input label='Email' type='email' id='email' placeholder='Email' onChange={handleEmail} value={email}/>
                    <Input label='Senha' type='password' id='password' placeholder='Senha' onChange={handlePassword} value={password}/>
                    <Button loading={true} text='ENTRAR' type='submit' id='login' onClick={() => show()}/>
                    <small className={styles.small}>Novo no Gaia Broker? <a href="#"><b>CADASTRE-SE</b></a></small>
                    <small className={styles.small}>Esqueci minha senha! <a href="#"><b>RECUPERAR SENHA</b></a></small>     
                </div>
            </div>
            <img className={styles.background_image} src='./../../../public/background.png'></img>
        </div>
    )
}

export default LoginScreen;
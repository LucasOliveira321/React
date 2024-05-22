import '../styles/LoginScreen.module.css';
import { useState } from 'react';
import { useRequests } from '../../../shared/hooks/useRequests';
import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import styles from '../styles/LoginScreen.module.css';
import SVGLogoGaiaHorizontal from '../../../shared/components/icons/SVGLogoGaiaHorizontal';


const LoginScreen = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => { 
        setPassword(event.target.value);
    }

    //  POST REQUEST
    const { authRequest } = useRequests();

    const handleLogin = () => {
        authRequest({
            email: email,
            password: password
        });
    }
    

    return (
        <div className={styles.container_login_screen}>
            <div className={styles.container_login}>
                <div className={styles.div_logo}>
                    <SVGLogoGaiaHorizontal />
                    <h1 className={styles.title}>LOGIN</h1>
                    <Input label='Email' type='email' id='email' placeholder='Email' onChange={handleEmail} value={email}/>
                    <Input label='Senha' type='password' id='password' placeholder='Senha' onChange={handlePassword} value={password}/>
                    <Button loading={true} text='ENTRAR' type='submit' id='login' onClick={() => handleLogin()}/>
                    <small className={styles.small}>Novo no Gaia Broker? <a href="#"><b>CADASTRE-SE</b></a></small>
                    <small className={styles.small}>Esqueci minha senha! <a href="#"><b>RECUPERAR SENHA</b></a></small>     
                  
                </div>
            </div>
            <img className={styles.background_image} src='./../../../public/background.png'></img>
        </div>
    )
}

export default LoginScreen;
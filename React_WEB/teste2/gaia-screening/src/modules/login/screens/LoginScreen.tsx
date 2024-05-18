import { useState } from 'react';
import Button from '../../../shared/buttons/button/Button';
import Input from '../../../shared/inputs/input/Input';
import styles from '../styles/LoginScreen.module.css';
import SVGLogoGaiaHorizontal from '../../../shared/icons/SVGLogoGaiaHorizontal';
// import axios from 'axios';


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(event.target.value);
    }
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(event.target.value);
    }


    // const show = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     console.log('chamou');
    //     console.log(event);
    //     console.log(event.target);
    // }

    const showLogs = (e: React.MouseEvent<HTMLButtonElement>) => {
        alert('chamou');
        console.log(e.target)
        
    };
    // const handleLogin = async () => {
    //     const response = await axios({
    //         method: 'POST',
    //         url: '',
    //         data: {
    //             email: email,
    //             password: password
    //         }
    //     }).then((data) => {
    //         console.log(data);
    //         return data;
    //     }).catch(() => {
    //         console.log('Erro');
    //     })
    //     console.log(response);
    // }

    return (
        <div className={styles.container_login_screen}>
            <div className={styles.container_login}>
                <div className={styles.div_logo}>
                    <SVGLogoGaiaHorizontal />
                    <h1 className={styles.title}>LOGIN</h1>
                    <Input label='Email' type='email' id='email' placeholder='Email' onChange={handleEmail} value={email}/>
                    <Input label='Senha' type='password' id='password' placeholder='Senha' onChange={handlePassword} value={password}/>
                    <Button text='ENTRAR' type='submit' id='login' onClick={showLogs}/>
                    <small className={styles.small}>Novo no Gaia Broker? <a href="#"><b>CADASTRE-SE</b></a></small>
                    <small className={styles.small}>Esqueci minha senha! <a href="#"><b>RECUPERAR SENHA</b></a></small>
                </div>
            </div>
            <img className={styles.background_image} src='./../../../public/background.png'></img>
        </div>
    )
}

export default LoginScreen;
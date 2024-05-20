import './Alert.css'

interface AlertProps {
    id: number;
    type: 'success' | 'error';
    message: string;
    onClose: (id: number) => void;
    position: number;
}

export const Alert = ({id, type, message, onClose, position}: AlertProps) => {
    return (
        <div className={`alert ${type} show`} style={{ bottom: `${position * 70}px` }}>
            <span className="closebtn" onClick={() => onClose(id)}>&times;</span>
            <strong>{type === 'success' ? 'Sucesso!' : 'Erro!'}</strong> {message}
        </div>
    )
}

// HOW TO USE ALERT

// interface AlertData {
//     id: number;
//     type: 'success' | 'error';
//     message: string;
// }
// const [alerts, setAlerts] = useState<AlertData[]>([]);
// const addAlert = (type: 'success' | 'error', message: string) => {
//     const id = new Date().getTime();
//     setAlerts((prevAlerts) => [...prevAlerts, { id, type, message }]);
//     setTimeout(() => removeAlert(id), 3000);
// };
// const removeAlert = (id: number) => {
//     setAlerts((prevAlerts) => prevAlerts.filter(alert => alert.id !== id));
// };


{/* <Button loading={true} text='ENTRAR' type='submit' id='login' onClick={() => addAlert('success', 'This is a success message!')}/> */}

// <div className="alert_container">
// {alerts.map((alert, index) => (
//     <Alert
//         key={alert.id}
//         id={alert.id}
//         type={alert.type}
//         message={alert.message}
//         onClose={removeAlert}
//         position={index}
//     />
// ))}
// </div>

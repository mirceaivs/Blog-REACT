import classes from './Modal.module.css';
import {useNavigate} from 'react-router-dom';



export const Modal = (props:any) => {
    const navigate = useNavigate();
    function closeHandler(){
        navigate('..');//sau / pt pagina principala 
    }
    
    return(
        <>
            <div className={classes.backdrop} onClick={closeHandler}></div>
            <dialog open className={classes.modal}>
                {props.children}
            </dialog>    
            
        </>
    );
}
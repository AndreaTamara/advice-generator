import dice from '../../assets/images/icon-dice.svg';
import './ChangeAdviceButton.css'
export default function ChangeAdviceButton({onChangeAdvice}){

    

    return(
        <div className='advice-button'
        onClick={()=>onChangeAdvice()}
        >
           <img src= {dice} alt='dice-icon'/>
        </div>
    )
}
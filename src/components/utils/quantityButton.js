import { IconButton } from "@material-ui/core";
import { IoRemoveSharp, IoAddSharp } from 'react-icons/io5';

const QuantityButton = (props) => {


    return (
        <div className='quantity-button'>
            <IconButton onClick={props.handleSub} className='icon-button'><IoRemoveSharp /></IconButton>
            <div className='value'>{props.quantity}</div>
            <IconButton onClick={props.handleAdd} className='icon-button'><IoAddSharp /></IconButton>
        </div>
    )
}

export default QuantityButton;
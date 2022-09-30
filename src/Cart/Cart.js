import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const [haveBreak, setHaveBreak] = useState([]);
    const { cart } = props;

    const haveABreak = (event) => {
        setHaveBreak(event.target.value);
    }

    console.log(cart);
    let time = 0;
    for (const writer of cart) {
        time = time + parseFloat(writer.timeRequired);
        console.log(typeof (writer.timeRequired))
    }


    return (
        <div>
            <div className="cart-container">
                <div>
                    <h1>Navil</h1>
                    <p><small>Mohammadpur,Dhaka</small> </p>
                </div>
                <div>
                    Weight: 75<small>kg </small>
                    Height: 5.6
                    Age: 25<small>yrs</small>
                </div>
                <div className='add-break'>
                    <p>Add A Break</p>
                    <div className='break-button'>
                        <button value='2' onClick={haveABreak} className='break'>2m</button>
                        <button className='break' value='3' onClick={haveABreak} >3m</button>
                        <button className='break'
                            value='4' onClick={haveABreak} >4m</button>
                        <button className='break'>5m</button>
                        <button className='break'>6m</button>
                    </div>
                </div>
                <div>
                    <p>Reading Details</p>
                    <p>Reading Time: {time}min </p>
                    <p>Break Time: <input type="text" value={setHaveBreak} /></p>
                    <button>Activity Complete</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css'

const Cart = (props) => {
    const [haveBreak, setHaveBreak] = useState([]);
    const { cart } = props;

    const haveABreak = (event) => {
        setHaveBreak(event.target.value);
    }

    let time = 0;
    for (const writer of cart) {
        time = time + parseFloat(writer.timeRequired);
        console.log(typeof (writer.timeRequired))
    }
    const notify = () => {
        toast("Wow! Your today's activity is completed.");
    }

    return (
        <div>
            <div className="cart-container">
                <div className='information'>
                    <div>
                        <img src="./me.png" alt="" />
                    </div>
                    <div>
                        <p className='bold-name'>Fahim Abser </p>
                        <p><small>Mohammadpur,Dhaka</small> </p>
                    </div>
                </div>
                <div className='info'>
                    <div className='space-right'>
                        <h4>65 <small>kg</small></h4>
                        <small>Weight</small>
                    </div>
                    <div>
                        <h4 className='space-right'>5.6 <small>kg</small></h4>
                        <small>Height</small>
                    </div>
                    <div>
                        <h4>25 <small>yrs</small></h4>
                        <small>Age</small>
                    </div>
                </div>
                <div className='add-break'>
                    <p className='bold'>Add A Break</p>
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
                    <p className='bold'>Reading Details</p>
                    <p className='bold'>Reading Time: {time} min </p>
                    <p className='bold'>Break Time: <input type="text" value={setHaveBreak} /></p>
                    <button className='activity-btn' onClick={notify}>Activity Completed</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Cart;
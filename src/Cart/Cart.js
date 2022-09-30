import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css'
import person from "./me.png"

const Cart = (props) => {
    const [haveBreak, setHaveBreak] = useState();
    const { cart } = props;

    // const haveABreak = (event) => {
    //     setHaveBreak(event.target.value);
    // }
const handleBreak = (r) =>{
    const breakTime = r;
    setHaveBreak(breakTime);
    localStorage.setItem('break',breakTime);
}
useEffect(()=>{
    const getBreak = localStorage.getItem('break');
    setHaveBreak(getBreak);
},[])
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
                        <img src={person} alt="" />
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
                        <button onClick={()=>handleBreak(2)} className='break'>2m</button>
                        <button onClick={()=>handleBreak(3)} className='break'>3m</button>
                        <button onClick={()=>handleBreak(4)} className='break'>4m</button>
                        <button onClick={()=>handleBreak(5)} className='break'>5m</button>
                        <button onClick={()=>handleBreak(6)} className='break'>6m</button>
                    </div>
                </div>
                <div>
                    <p className='bold'>Reading Details</p>
                    <p className='bold'>Reading Time: {time} min </p>
                    <p className='bold'>Break Time: {haveBreak}</p>
                    <button className='activity-btn' onClick={notify}>Activity Completed</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Cart;
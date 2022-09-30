import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Writer from '../Writer/Writer';
import './Home.css';

const Home = (props) => {
    const { writer } = props;
    const [writers, setWriters] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('writers.json')
            .then(res => res.json())
            .then(data => setWriters(data))
    }, [])
    const addWantToRead = (writer) => {
        const newCart = [...cart, writer];
        setCart(newCart);
    }
    return (
        <div className='reading-container'>
            <div className="writer-info">
                {
                    writers.map(writer => <Writer
                        key={writer.id}
                        writer={writer}
                        addWantToRead={addWantToRead}
                    > </Writer>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;
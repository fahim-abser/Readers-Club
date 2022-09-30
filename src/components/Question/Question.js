import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='padding'>
            <h3>1.How does react work?</h3>
            <p><span className='font-size'>Ans:</span> ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            <h3>2.Difference between props and state in react</h3>
            <p><span className='font-size'>Ans:</span> Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
            <h3>3.What does useEffect do?</h3>
            <p><span className='font-size'>Ans:</span> By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
        </div>
    );
};

export default Question;
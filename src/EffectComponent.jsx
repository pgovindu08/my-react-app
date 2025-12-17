import React, {useState, useEffect} from 'react';
import './EffectComp.css'
import { func } from 'prop-types';

function EffectComponent(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("black")

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);

    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green")
    }

    return(
        <>
            <div className='counter-container'>
                <p className='text-heading' style={{color: color}}>Count: {count}</p>
                <button className="button" onClick={addCount}>Add</button>
                <button className="button" onClick={subtractCount}>Subtract</button>
                <button className='button' onClick={changeColor}>Change Color</button>
            </div>
        </>
    );
}

export default EffectComponent
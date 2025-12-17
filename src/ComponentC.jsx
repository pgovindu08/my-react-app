import './CompA.css'
import ComponentD from './ComponentD';
import { useContext } from 'react';
import { UserContext } from './ComponentA.jsx';

function ComponentC(props){
    
    const user = useContext(UserContext);
    
    return(
        <div className="box">
            <h1>Component C</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD></ComponentD>
        </div>
    );
}

export default ComponentC
import {useState, useEffect} from 'react';

function PracticeUseStateUseEffect(){
    //useState to create a state variable 'count' with initial value 0
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');


useEffect(()=>{    //side effect to update document title whenever 'count' changes and we can also opdate other document like API calls and dom manipulation
    document.title = `You clicked ${count} ${color}times`;
}, [count, color]); //dependency array to specify when the effect should run

    const red = 'red';
    const green = 'green';
    


    function addCount(){
        setCount(c => count + 1);
    }

    function minusCount(){
        setCount(c=> c - 1);
        
    }

    function changeColour(){
        setColor(c => c=== green ? red : green)
        
    }
    return (
        <div>
            <style>{`h1 { color: ${color}; }`}</style>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Increase Count</button>
            <button onClick={minusCount}>Decrease Count</button>
            <button onClick={changeColour}>Change Colour</button>
        </div>
    )

}
export default PracticeUseStateUseEffect;
import {useState, useEffect} from 'react';

function PracticeEventListenerHandleSize(){
    //useState to create a state variable 'count' with initial value 0
    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState (window.innerHeight);

    useEffect(()=>{
        window.addEventListener('resize', handleResize);

        return()=>{
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    function handleResize(){
        setWidth (window.innerWidth);
        setHeight (window.innerHeight);
    }

    return (
        <div>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
        </div>
    )
}
export default PracticeEventListenerHandleSize;
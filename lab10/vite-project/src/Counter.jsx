import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    
    function increment(){
        setCount( count + 1);
    }

    function decrement(){
        if(count === 0){
            return;
        }
        setCount( count - 1);
    }

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="text-center"> 
                    <p className="fs-2"><b>{count}</b></p>
                    <div className='d-flex'>

                        <button className="btn btn-success me-3" onClick={increment}>Increment</button>
                        <button className="btn btn-danger ms-5" onClick={decrement}>Decrement</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;

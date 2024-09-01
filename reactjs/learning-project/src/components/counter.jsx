import React from 'react';
import { MyCustomButton } from '../App';


export function Counter() {

    const [counter, setCounter] = React.useState(0);

    const increase = () => setCounter((prev) => prev + 1);
    const decrease = () => setCounter((prev) => prev - 1);

    return (
        <div className='w-80'>
            <p className='text-center text-2xl'>
                {counter}
            </p>
            <MyCustomButton
                bgColor="green"
                content="Increase"
                action={increase}
            />
            <MyCustomButton
                bgColor="red"
                content="Decrease"
                action={decrease}
            />
        </div>
    )
}
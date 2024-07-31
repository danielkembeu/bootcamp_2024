import React from 'react';
import clsx from 'clsx';
import useFetchUsers from './hooks/useFetchUsers';
import './App.css';


// Composant reusable.
function Box({ color, onClick, selected }) {
    return (
        <div onClick={onClick} className={clsx(
            "rounded-lg text-white size-32 flex items-center justify-center",
            `${color}`,
            "transition duration-300",
            `${selected && "-translate-y-6 rotate-180 duration-500"}`,

        )}>
            <span className={`${selected && "-rotate-180"}`}>
                {color}
            </span>
        </div>
    )
}


function UserCard({ data }) {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <img src={data.avatar} alt={data.name} className='w-32 h-32 rounded-full object-cover' />
                <h2 className='mt-4 text-xl'>{data.name}</h2>
                <p>{data.email}</p>
            </div>
        </div>
    )
}


export default function App() {
    const colors = ['bg-blue-400', 'bg-orange-600', 'bg-green-400', 'bg-yellow-400'];

    const URL = 'https://jsonplaceholder.typicode.com/todos';

    // State (etats)
    const [colorIndex, setColorIndex] = React.useState(null);
    const { users } = useFetchUsers();
    console.log(users);


    // Méthodes (fonctions)
    const selectColor = (id) => {
        setColorIndex(id);
    }


    // Rendu (affichage)
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <div className={`myAnim transition duration-300 size-44 ${colorIndex !== null ? `${colors[colorIndex]}` : "bg-gray-300"} rounded-lg my-6`}></div>

            <div className='flex space-x-4 items-center mt-32'>
                {
                    colors.map((color, index) => (
                        <Box
                            key={index}
                            color={color}
                            onClick={() => selectColor(index)}
                            selected={colorIndex === index}
                        />
                    ))
                }
            </div>
        </div>
    )
}

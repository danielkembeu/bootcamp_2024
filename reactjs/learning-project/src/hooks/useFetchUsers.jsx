import React from 'react';
import axios from 'axios';

export default function useFetchUsers() {
    const [users, setUsers] = React.useState(null);

    React.useEffect(() => {
        async () => {
            const response = await axios.get(URL);
            const data = await response.json();
            setUsers(data);

            console.log(data);
        }
    }, [users]);

    return { users };
}

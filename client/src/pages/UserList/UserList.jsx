import { useState, useEffect } from 'react';
import { users } from '../../resources/data';

const UserList = () => {
    const [usersList, setUsersList] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        setUsersList(users);
    }, [usersList]);

    const handleSearch = () => {
        // take in a string, filter through usersList, filter check will use .includes, reset usersList with results
        const filteredUsers = usersList.filter((item) =>
            item.username.includes(searchInput)
        );
        console.log(filteredUsers)

        // setUsersList(filteredUsers)
        // console.log(usersList)
    };

    return (
        <>
            <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                type='text'
            />
            <button onClick={handleSearch}>Search</button>
            <div>
                {usersList.map((item, index) => (
                    <h2 key={index}>{item.username}</h2>
                ))}
            </div>
        </>
    );
};

export default UserList;

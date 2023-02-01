import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { users } from '../../resources/data';

const UserList = () => {
    const [usersList, setUsersList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        setUsersList(users);
        if (filteredList.length > 0) {
            setUsersList(filteredList);
        }
    }, [usersList, filteredList]);

    const handleSearch = () => {
        setUsersList(users);
        setFilteredList(
            usersList.filter((item) => item.username.includes(searchInput))
        );
    };

    return (
        <>
            <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                type='text'
            />
            <button onClick={handleSearch}>Search</button>
            <button onClick={() => {
                setUsersList([])
                setFilteredList([])
                setSearchInput('')
            }}>Reset</button>
            <div>
                {usersList.map((item, index) => (
                    <h2 key={index}><Link to={`/profile/${item.username}`}>{item.username}</Link></h2>
                ))}
            </div>
        </>
    );
};

export default UserList;

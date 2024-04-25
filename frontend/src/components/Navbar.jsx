import React, { useState, useEffect } from 'react';
import '../components/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleClick = () => {
        if (username) {
            alert('You are logged in');
        }
    };

    return (
        <div className='navbar'>

            <ul className='nav-list' >
                <h1 className='logo-title'>ShopsCart</h1>
                <li className='nav-item'>Home</li>
                <li className='nav-item'>About</li>
                <li className='nav-item'>Products</li>
                <li className='nav-item delivery'>
                <div className='main-delivery'>
                     <h5>Delivery to</h5>
                     <img src='https://media.istockphoto.com/id/537287255/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=fSYF7pS1BQ1nL2mKdoqm7kOcbfndoxXqzFhLU97kuqM='>
                     </img>
                </div>
                <div className='exact-detail'>
                    <p>
                   {/*  {city Name from the database} */}
                    </p>
                </div>
                </li>
            </ul>

            <div className='nav-search'>
                <input type='text' placeholder='Search' className='search' />
            </div>

            <div className='nav-account'>
                <div className='account' onClick={handleClick}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' alt='' />
                    <p>
                        {username ? username : <Link className='link' to='/signup'>SignUp</Link>}
                    </p>
                </div>
                <div className='cart'>
                    <img src='https://t3.ftcdn.net/jpg/03/14/85/06/360_F_314850659_2aQLerz30kWj78tqpaGSbzYD6sAUmuDf.jpg' />
                    <Link className='nav-link' to='/cart'><p>Cart</p></Link>
                </div>
            </div>
            

        </div>
    )
}

export default Navbar;

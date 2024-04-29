import React, { useState, useEffect } from 'react';
import '../components/navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Navbar() {
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState({pincode:"",state_name:""});
    const [search, setSearch] = useState('');

    const history = useNavigate();

   const handleSearch = (event) => {
    event.preventDefault();
    history(`/viewproduct/${search}`);
   };

useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedToken = localStorage.getItem('token');
    if (storedUsername) {
        setUsername(storedUsername);
        axios.get(`http://localhost:8000/getAddress?username=${storedUsername}`)
            .then(response => {
                    const firstAddress = response.data[0];
                    setAddress(firstAddress);
            })
            .catch(error => {
                console.log('Error getting address:', error);
            });
    }
}, []);
   


    const handleClick = () => {
        if (username) {
            alert('You are Signed in');
        }
    };

    return (
        <div className='navbar'>

            <ul className='nav-list' >
                <h1 className='logo-title'><Link className='link' to='/'>ShopCart</Link></h1>
                <li className='nav-item'><Link className='link' to='/'>Home</Link></li>
                <li className='nav-item'><Link className='link' to='/viewproduct/all'>About</Link></li>
                <li className='nav-item'><Link className='link' to='/viewproduct/all'>Products</Link></li>
                <li className='nav-item delivery'>
                <div className='main-delivery'>
                     <h5><Link className='link' to="/address">Delivery to</Link></h5>
                     <img src='https://media.istockphoto.com/id/537287255/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=fSYF7pS1BQ1nL2mKdoqm7kOcbfndoxXqzFhLU97kuqM='>
                     </img>
                </div>
                <div className='exact-detail'>
                {address && address.state_name && address.pincode ? (
        <p>
            {address.district}, {address.pincode}
        </p>
        ) : (
        <p>Add your Address</p>
         )}
                </div>
                </li>
            </ul>

        <div className='nav-search'>
            <form onSubmit={handleSearch}>
               <input
                     className='search'
                      type="text"
                      placeholder="Search"
                      value={search}
                      onChange={e => setSearch(e.target.value)}
               />
        
      </form>
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

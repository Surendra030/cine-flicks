import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function MainNavbar() {
    const [searchTerm, setSearchItem] = useState(''); 
    const navigate = useNavigate();

     const handleInputChange = (e) => {
        setSearchItem(e.target.value); // Update search term as user types
    };

    // Trigger search when search button is clicked
const handleSearchClick = () => {
    if (searchTerm) {
        // Navigate to the search-results route with the search term as a parameter
        navigate(`/search-results/${searchTerm}`);
        setSearchItem(''); // Clear the input after searching
    }
    else{
        alert("Not a valie title")
    }
};


    return (
        <div className='navbar text-light w-100 d-flex justify-content-between align-items-center px-3 py-5 m-1 align-text-center'>
            <div className='mainHeading'>
                <h1>CineFlicks</h1>
            </div>

            <div className='w-50'>

                <ul className='nav-items d-flex justify-content-evenly align-items-center fs-5 w-100 list-unstyled'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/TvShows">TV SHOWS</Link></li>
                    <li><Link to="/Movies">MOVIES</Link></li>
                    <li><Link to="/webSeries">WEB SERIES</Link></li>
                </ul>

            </div>

            <div className='d-flex justify-content-between align-items-center w-25'>
                <input
                    className='p-2 border border-grey'
                    type="text"
                    value={searchTerm}
                    placeholder='Search here'
                    onChange={handleInputChange} // Update the search term when user types
                />
                <button
                    className='py-2 px-3 bg-danger rounded text-light border border-light'
                    type="button"
                    onClick={handleSearchClick} // Trigger search on button click
                >
                    Search
                </button>
                <button className='p-2 bg-danger text-light rounded border border-light' type="button">Login</button>
            </div>
        </div>
    );
}

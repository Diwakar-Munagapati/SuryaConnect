import './Home.css'
import { FaMapMarkerAlt, FaSearch, FaClipboardList } from 'react-icons/fa';

function Home() {
    return(
        <div className='home-container'>
        <div className='Content'>
            <div className='Text'>
                <h1>Find Your Perfect Solar Partner</h1>
                <p>Suryaconnect simplifies your journey to solar energy. Browse our directory of verified dealers and find the right fit for your home or buisness in India.</p>
            </div>
            <div className = 'Search'>
                <h2><FaSearch/>Find Your Ideal Dealer</h2>
                <p>Filter dealers by location and your specific needs.</p>
                <div className="search-input-container">
                    <label htmlFor="location"><FaMapMarkerAlt /> Location</label>
                    <select id="location">
                        <option value="">Select a location</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="delhi">Delhi</option>
                        <option value="bangalore">Bangalore</option>
                    </select>
                </div>
                <div className="search-input-container">
                    <label htmlFor="requirements"><FaClipboardList /> Requirements</label>
                    <select id="requirements">
                        <option value="">Select your requirements</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                    </select>
                </div>
                <button className="search-button">Search Dealers</button>
            </div>
        </div>
        </div>
    );
};

export default Home;
import './Home.css'

function Home() {
    return(
        <div className='Home-container'>
        <div className='Content'>
            <div className='Text'>
                <h1>Find Your Perfect Solar Partner</h1>
                <p>Suryaconnect simplifies your journey to solar energy. Browse ourdirectory of verified dealersand find the right fit for your home or buisness in India.</p>
            </div>
            <div className = 'Search'>
                <h2>Find Your Ideal Dealer</h2>
                <p>Filter dealrs by location and your specific needs.</p>
                <p>Location</p>
                <input type='drop-down'></input>
                <p>Requirnment</p>
                <input type='drop-down'></input><br></br><br></br>
                <button>Search Dealers</button>
            </div>
        </div>
        </div>
    );
};

export default Home;
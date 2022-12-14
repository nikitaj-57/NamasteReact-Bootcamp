import './style.css';
import { Link } from 'react-router-dom';

const title = "Brainy Fools";

const TitleComponent = () => (
    <nav className='nav-container'> 
        <h1>{title}</h1>
        <div className='ml-auto nav-right'>
            <Link to={"/"} >
                <h3 id='home'>Home</h3>
            </Link>

            <Link to={"/about-us"} >
                <h3 id='about'>About</h3>
            </Link>
        </div> 
    </nav>     
)

export default TitleComponent;
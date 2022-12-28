import './style.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ThemeContext from '../../Context/ThemeContext';

const title = "Brainy Fools";



const TitleComponent = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
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
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme}</button>
    </nav>   
    )  
}

export default TitleComponent;
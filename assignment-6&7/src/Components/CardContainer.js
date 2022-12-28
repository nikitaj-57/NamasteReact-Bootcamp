import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../Context/ThemeContext';

const CardComponent = ({ singleUser }) => {
    const { theme } = useContext(ThemeContext);

    const { login, name, avatar_url } = singleUser;
    return (        
      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-4" key={singleUser.id} style={{ }}>
          <div className='d-flex align-items-center bg-dark p-3 rounded-lg flex-column' style={{ width: "15rem", height: "18rem", backgroundColor: theme === "light" ? "#fff" : "#000"}}>
              <div className='person-img'>
                <img src={avatar_url} alt="img" className="img-fluid"></img>
              </div>
              <div className='person-name my-2'>
                <Link to={`/member/${login}`}>
                <h3 className='text-white'>{name}</h3>
                </Link >
              </div>
          </div>             
      </div> 
    )
}

export default CardComponent;


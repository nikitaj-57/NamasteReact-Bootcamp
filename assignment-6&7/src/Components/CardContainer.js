import { Link } from 'react-router-dom';

const CardComponent = ({ singleUser }) => {
    const { login, name, avatar_url } = singleUser;
    return (        
      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-4" key={singleUser.id}>
          <div className='d-flex align-items-center p-3 bg-dark rounded-lg flex-column' style={{ width: "15rem", height: "18rem"}}>
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


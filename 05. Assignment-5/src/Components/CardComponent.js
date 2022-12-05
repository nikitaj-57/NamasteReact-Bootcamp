import './style.css';

const CardComponent = (props) => {
    // console.log(props.userInfo);
    const { img, name, role } = props.userInfo;
    return (        
      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-4" key={props.id}>
          <div className='d-flex align-items-center p-3 bg-dark rounded-lg flex-column'>
              <div className='person-img'>
                <img src={img} alt="img" className="img-fluid"></img>
              </div>
              <div className='person-name my-2'>
                <h3 className='text-white'>{name}</h3>
              </div>
              <div className='info'>
                <h6 className='text-white'>{role}</h6>
              </div>
  
              <div className='social-icons'>
                <a href='#' className='text-white'><i className="fa-brands fa-github p-2"></i></a>
                <a href='#' className='text-white'><i className="fa-brands fa-linkedin p-2"></i></a>
                <a href='#' className='text-white'><i className="fa-brands fa-instagram p-2"></i></a>
              </div>
          </div>             
      </div> 
    )
}

export default CardComponent;


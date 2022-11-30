import data from '../data1.js';
import './style.css';


const CardComponent = () => {
    // const { name, img, role, company, location } = props.data;
    return (
      <section className='container'>
            <div className='row'>
                {data.map((user)  => (
                <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-4" key={user.id}>
                    <div className='shadow d-flex justify-content-center align-items-center p-3 bg-dark rounded-lg flex-column'>
                        <div className='person-img'>
                            <img src={user.img} alt="img" className="img-fluid rounded-circle"></img>
                        </div>
                        <div className='person-name my-2'>
                                <h3 className='text-white'>{user.name}</h3>
                        </div>
                        <div className='info'>
                                <h6 className='text-white'>{user.role}</h6>
                                
                        </div>
                        <div className='social-icons'>
                            <a href='#' className='text-white'><i className="fa-brands fa-github p-2"></i></a>
                            <a href='#' className='text-white'><i className="fa-brands fa-linkedin p-2"></i></a>
                            <a href='#' className='text-white'><i className="fa-brands fa-instagram p-2"></i></a>
                        </div>
                    </div>
                        {/* <Card.Img variant="top" src={user.img} style={{ width:"100%", height: '12rem' }}/> */}
                </div> 
                ))}
            </div>
    </section>
    )
}

export default CardComponent;


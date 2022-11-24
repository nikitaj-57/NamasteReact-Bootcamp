import React from 'react';
import './style.css';
import { FaUserCheck } from "react-icons/fa";
import { FaReact } from "react-icons/fa";


const Header = () => (
    <div className='mainContainer'>
        <div id='logo' className='logoHeader'>
          <FaReact size="50px"
          />
        </div>
        
          <div className='searchContainer'>
              <input className="inputClass" type="text" placeholder="Search.."></input>
          </div>
    
          <div >
            <FaUserCheck size="50px" className='userIcon'/>
          </div>
        </div>
  )

export default Header;
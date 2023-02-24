import React from 'react'; 
import Tilt from 'react-parallax-tilt';
import globe from './globe.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma5 mt04'>
          <Tilt style={{ height: '4rem',width: '4rem',  backgroundColor: 'darkgreen',}} className='br3 Tilt shadow-5'>
            <div className='pa2'>
              <img style={{padding:'0',}} alt='logo' src={globe}/>
            </div>
          </Tilt>
        </div>
    );
}

export default Logo; 
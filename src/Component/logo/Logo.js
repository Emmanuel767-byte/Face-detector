import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import brain from './brain.png'// import an IMAGE ,yes an Actual IMAGE as a variable

function Logo() {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 ml5 shadow-2" options={{ speed: 50, max : 45 }} style={{ height: 250, width: 250 }}>
 <div className="Tilt-inner pa3">
     <img style={{paddingTop: '2.4em'}} src= {brain} alt="Logo"/>
     </div>
</Tilt>
        </div>
    )
}

export default Logo
 
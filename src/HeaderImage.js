
  import React from 'react'
  import './HeaderImage.css'
  import myphoto from './assets/my.png';
  const HeaderImage =()=>{
    
      return  (
        <div className="HeaderImage"><img id="myphoto" src={myphoto} style={{ height: '64px', width: '54px' }} alt=''/></div>
      )
  }

   export default HeaderImage;

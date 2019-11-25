import React from 'react';
import facebook from '../../assets/fb-icon.png';
import instagram from '../../assets/ig-icon.png';


function Footer() {
  
  return (
    <footer>
      <div className="container" style={{textAlign: "center", padding: "20px", height: "60px"}}>
      <a href="https://www.facebook.com/retomadaiep/"><img src={facebook}/></a>
      <a href="https://www.instagram.com/retomadaiep/"><img src={instagram}/></a>
      </div>
      <div className="container" style={{textAlign: "center", padding: "20px", height: "60px"}}>
        Retomada | Desde 2015
      </div>
    </footer>
  );
}

export default Footer;

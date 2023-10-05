import { React, useContext } from 'react';

import '../style/footer.scss';

import Theme from '../HOC/Theme'

function Footer() {

  const {theme} = useContext(Theme);

  return (
    <div className="footer" style={theme==='light' ? {backgroundColor: 'rgb(242,242,242)', color:'#1f1f1f'} : {backgroundColor: '#1f1f1f', color:'rgb(242,242,242)'}}>
        <div className="footer_item">
        <p>FOLOW ME.</p>
        <p><a href="https://github.com/salfan21" style={theme==='light' ? {backgroundColor: 'rgb(242,242,242)', color:'#1f1f1f'} : {backgroundColor: '#272727', color:'rgb(242,242,242)'}}>GitHub</a></p>
        </div>
        <div className="footer_item">
            <p>DESIGNED AND DEVELOPED BY SALFAN21 ©2023</p>
        </div>
    </div>
  );
}

export default Footer;
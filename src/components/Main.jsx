import { React, useContext } from 'react';

import '../style/main.scss';

import Theme from '../HOC/Theme'
import { Outlet } from 'react-router-dom';

function Main() {
  const {theme} = useContext(Theme);

  return (
    <div className="main" style={theme==='light' ? {backgroundColor: 'rgb(245, 245, 245)', color:'#1f1f1f'} : {backgroundColor: '#2a2a2a', color:'rgb(242,242,242)'}}>
        <Outlet/>
    </div>
  );
}

export default Main;
import { React, useContext} from 'react';

import './themeUI.scss'

import Theme from '../HOC/Theme'

import lampBlack from '../pic/lampBlack.png'
import lampWhite from '../pic/lampWhite.png'

function ThemeUI() {

  const {theme, toggleTheme} = useContext(Theme);
   
  return (
    <div className="themeUI" onClick={toggleTheme}> 
        <img src={theme==='light' ? lampBlack : lampWhite} alt=""/>
    </div>
  );
}

export default ThemeUI;
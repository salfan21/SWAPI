import {useContext} from 'react';

import Theme from '../HOC/Theme'

import '../style/load.scss';

import loadWhite from '../pic/loadWhite.gif'
import loadBlack from '../pic/loadBlack.gif'

function Load() {

  const {theme} = useContext(Theme);

  return (
    <div className="load"><img src={theme==='light' ? loadWhite : loadBlack} alt="" /></div>
  );
}

export default Load;
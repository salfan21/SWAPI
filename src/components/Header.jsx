import {useContext} from 'react';

import ThemeUI from '../UIelement/ThemeUI';
import Theme from '../HOC/Theme'

import '../style/header.scss';
import logoWhite from '../pic/logoWhite.png'
import logoDark from '../pic/logoBlackV2.png'
import { NavLink } from 'react-router-dom';

function Header() {

  const {theme} = useContext(Theme);

    const listItem = [
        {id:1, title:'characters', sw:'people', to:`people/page/1`},
        {id:2, title:'films', sw:'films', to:`films/page/1`},
        {id:3, title:'species', sw:'species', to:`species/page/1`},
        {id:4, title:'starships', sw:'starships', to:`starships/page/1`},
        {id:5, title:'vehicles', sw:'vehicles', to:`vehicles/page/1`},
        {id:6, title:'planets', sw:'planets', to:`planets/page/1`}
    ]
  return (
    <div className="header" style={theme==='light' ? {backgroundColor: 'rgb(242,242,242)', color:'#1f1f1f'} : {backgroundColor: '#1f1f1f', color:'rgb(242,242,242)'}}>
        <div className="header_logo"><img src={theme==='light' ? logoWhite : logoDark} alt="" /></div>
        <div className="header_list">
            {listItem.map(el => <div className='header_list_item' title={el.sw} key={el.id}>
              <NavLink
               style={{color:'inherit', textDecoration:'none'}} to={el.to}>{el.title}
               </NavLink>
              </div>)}
        </div>
        <ThemeUI/>
    </div>
  );
}

export default Header;
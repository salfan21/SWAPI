import { React, useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import Theme from '../HOC/Theme'
import ModalContext from '../HOC/Modal';

function Layout() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () =>{
    theme === 'light' ? setTheme('dark'):setTheme('light')
  }

  const [mVisible, setMVisible] = useState(false)
  let [modalData, setModalData] = useState({})

  return (
    <ModalContext.Provider value={{mVisible, setMVisible, modalData, setModalData}}>
    <Theme.Provider value={{theme, setTheme, toggleTheme}}>
      <div className="App">
        <Header/>
          <Main/>
        <Footer/>
      </div>
    </Theme.Provider>
    </ModalContext.Provider>
  );
}

export default Layout;
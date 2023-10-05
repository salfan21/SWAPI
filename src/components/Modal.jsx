import { useContext} from "react";
import '../style/modalWindow.scss'
import ModalContext from "../HOC/Modal";
import Theme from '../HOC/Theme'

function ModalWindow() {

    const {setMVisible, modalData, setModalData} = useContext(ModalContext)

    const closeHandler = () =>{
        setMVisible((false))
        setModalData({})
    }

    const {theme} = useContext(Theme);

  return (
    <div className="ModalWindow" style={theme==='light' ? {backgroundColor: 'rgba($color: #1f1f1f $alpha: 0.5)'} : {backgroundColor: 'rgba(242,242,242, 0.2)'}}>
        <div className="modal" style={theme==='light' ? {backgroundColor: 'rgba(242,242,242, 1)', color: '#1f1f1f'} : {backgroundColor: '#1f1f1f', color: 'rgba(242,242,242, 1)'}}>
          <div className="clos" onClick={closeHandler}><div className="close">x</div></div>
          <div className="content">
            <div className="pic"><img src={modalData.img} alt=""/></div>
            <div className="text">{modalData.keys.map((el, id) => <p>{el + ': '}<span>{modalData.values[id]}</span></p>)}</div>
          </div>
        </div>
    </div>
  );
}

export default ModalWindow;
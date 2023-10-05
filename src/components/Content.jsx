import { useEffect, useState, useContext } from "react";

import '../style/content.scss'

import Load from "../components/Load";

import {Link, NavLink, useLocation} from 'react-router-dom';

function Content({tF, tI}) {
    let idd = useLocation()
    idd = idd.pathname.split('/')

    const [sw, setSW] = useState([])
    const [result,setResult]  = useState([])
    const [state, setState] = useState(idd[3])
    const [load,setLoad] = useState(null)

        useEffect(()=>{
            setLoad(true)
            fetch(`https://swapi.dev/api/${tF}/?page=${state}`)
                .then(res => res.json())
                .then(json => {
                    setLoad(false)
                    setResult(json.results)
                    let arr = [];
                    for(let i = 1; i <= Math.ceil(json.count/10); i++){
                        arr.push(i)
                    }
                    setSW(arr)
                })
        },[state])
        const idFe = (el) =>{
            el = el.url
            return parseInt(el.replace(/\D+/g,""));
        }

  return (
    load === false ? <div className="content">
        <div className="content_info">
             {result.length !== 0 ? 
             result.map(
                ((el, id) => <Link to={`/${idd[1]}/${id+1}`} style={{textDecoration:'none', color:'inherit'}} state={{fetch:`https://swapi.dev/api/${tF}/${idFe(el)}`, title: tI, img: `https://starwars-visualguide.com/assets/img/${tI}/${idFe(el)}.jpg`}} key={idFe(el)}>
                    <div className="content_info_item" key={idFe(el)}><img src={`https://starwars-visualguide.com/assets/img/${tI}/${idFe(el)}.jpg`}  alt="img not found"/><p>{el.name}</p></div>
                            </Link>  )
            ) : null}
        </div>
        <div className="content_switcher">
            {sw.length !== 0 ? sw.map((el, id) =><NavLink key={id} onClick={(e)=>setState(id+1)} style={{color:'inherit'}} to={`/${tF}/page/${el}`}><div className="content_switcher_item"  key={id} title={el}>{el}</div></NavLink>) : null}
        </div>
    </div> : true ? <Load/> : null
  );
}

export default Content;
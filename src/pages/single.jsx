import React, { useEffect, useState } from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import Load from '../components/Load';

import '../style/single.scss'

export const Single = () => {
    const id = useLocation()
    
    const [fetchStr, setFetchStr] = useState(`https://swapi.dev/api${id.pathname}`)
    const [data, setData] = useState({})
    useEffect(()=>{
        setData('loading')
        fetch(fetchStr)
            .then(resp => resp.json())
            .then(json => setData(json))
        },[fetchStr])
        
        const values = Object.values(data)
        const s = Object.keys(data)
        const text = [];
        const url = [];

        const headerImgGenerate = () =>{
            let img = id.pathname
            let arr = img.split('/')
            return arr[1] === 'people' ? `/characters/${arr[2]}`: img
        }
        const itemsURL = (el) =>{
            let str = el.split('/')
            let name = str[5] === 'characters' ? 'people' : str[5]
            str = str[6].split('.')
            return `/${name}/${str[0]}`
        }

        values.forEach((el, id) =>{
            typeof(el) === 'object' ? url.push({name: s[id], arr: el}) : text.push(`${s[id]}: ${el}`)
        })

        const opt = [];
        url.forEach((el,id) => {
            let arr1 =[]
            let str = ''
            el.arr.forEach(e=>{
                str = e.split('/')
                arr1.push(`https://starwars-visualguide.com/assets/img/${str[4] === 'people'? 'characters' : str[4]}/${str[5]}.jpg`)
            })
            opt.push(arr1)
        })
    return (
        <div className='single'>
            <div className='text'>
                <div className='img'><img src={`https://starwars-visualguide.com/assets/img${headerImgGenerate()}.jpg`} alt="img not found" /></div>
                <div style={{width:'100%'}}>{text.length !== 0 ? text.map(el => <p>{el}</p>):<Load/>}</div>
            </div>
            <div className='info'>
                {url.map((el,ind) => opt[ind].length !== 0 ? <div className='item'><h2>{el.name}</h2><div className="container">{opt[ind].map(el => <NavLink to={itemsURL(el)}><img onClick={()=>{setFetchStr(`https://swapi.dev/api${itemsURL(el)}`);setFetchStr(`https://swapi.dev/api${itemsURL(el)}`)}} src={el} alt='img not found'/></NavLink>)}</div></div>:null)}
            </div>
        </div>
    );
};


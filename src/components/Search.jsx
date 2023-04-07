import React, { useEffect, useState } from 'react'
import drugs from '../../drug.json'
import "../App.css"

export default function Search() {
  
    const [inputVal, setInputVal] = useState("")
    const [data, setData] = useState([])

    const onInputChange = (e) => {
        const value = e.target.value;
        setInputVal(value);
    
        const filteredResults = drugs.fields.filter(item =>
          item.label.toLowerCase().includes(value.toLowerCase())
        );
    
        setData(filteredResults);
    }

    const onSetValue = (el) => {
        setInputVal(el.label)
    }

    const onSearch = () => {
        const filteredResults = drugs.fields.filter(item =>
            item.label.toLowerCase().includes(inputVal.toLowerCase())
          )
          setData(filteredResults);
    }


return (
    <div>
        <div className='search' >
        <input type='text' value={inputVal} onChange={onInputChange} size="50"/>
        <button onClick={onSearch}>Search</button>
        </div>
        {
            data.map((el,i) => <div className='resultdiv' key={i} onClick={() => onSetValue(el)} >
                <p className='resultpara'>{el.label}</p>
                <p className='resultpara'>{el.key}</p>
                <p className='resultpara'>{el.type}</p>
                <p className='resultpara'>{el.order}</p>
            </div>)
        }
    </div>
  )
}

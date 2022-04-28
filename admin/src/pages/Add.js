import { response } from 'express';
import React from 'react'
import './add.scss'

const add = () => {
  function HandleSubmit(){
    document.addEventListener('DOMContentLoaded', ()=>{
      let url = "dummyData.xml";
      fetch(url)
      .then(response=>response.text())
      .then(data=>{
        console.log(data);
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xml");
        console.log(xml);
      })
    })
    return
  } 
  return (
    <div className='logp'>
      <div className='logp-container'>
            <form>
                <h1>Add News</h1>
                <input type="text" placeholder='Link' />
                <input type="number" placeholder='id' />
                <button className='loginButton' onSubmit={HandleSubmit}>Add</button>
            </form>
        </div>
    </div>
  )
}

export default add
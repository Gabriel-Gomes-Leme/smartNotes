import React, { useContext, useState } from 'react'
import './style.css'
import {GiNotebook} from 'react-icons/gi'
import { NoteContext } from '../../context/noteContext'
export const Header = () => {
  const {desc, searchNote} = useContext(NoteContext)
  const handleSearch = (e) =>{
    const value = e.target.value
    searchNote(value)
  }
  return (
    <header>
        <div className="wrapper">
          <div className="header__grid">
            <span className="logo">Smart Notes <GiNotebook></GiNotebook></span>
            <div className='search'>
              <input type="text" className="search__field" placeholder='Pesquisar...' onChange={handleSearch}/>
            </div>
          </div>
        </div>
      </header>
  )
}
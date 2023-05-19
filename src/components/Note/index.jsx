import React, { useContext, useState } from 'react'
import './style.css'
import {AiFillEdit} from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs'
import {IoIosColorPalette} from 'react-icons/io'
import Management from '../Management'
import { NoteContext } from '../../context/noteContext'
export const Note = ({note}) => {
  const {editNoteDesc, editNoteBg, showModal, type, removeNote} = useContext(NoteContext)
  const handleDesc = () =>{
    editNoteDesc(note)
  }
  const handleBg = () =>{
    editNoteBg(note)
  }
  const handleRemove = () =>{
    removeNote(note);
  }
  return (
    <>
    <div className="note" style={{background: note.bg}}>
      <div className="note__bar">
        <AiFillEdit className='note__icon' onClick={handleDesc}></AiFillEdit>
        <IoIosColorPalette className='note__icon' onClick={handleBg}></IoIosColorPalette>
        <BsFillTrashFill className='note__icon' onClick={handleRemove}></BsFillTrashFill>
      </div>
        <h2 className="note__desc">{note.desc}</h2>
    </div>
      {showModal && <><Management type={type}></Management></>}
    </>
  )
}

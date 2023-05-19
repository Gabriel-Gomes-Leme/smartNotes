import React, { useContext, useState } from 'react'
import './style.css'
import { NoteContext } from '../../context/noteContext'
import {MdAdd} from 'react-icons/md'
export const Form = () => {
  const [note, setNote] = useState('')
  const {desc, addNote} = useContext(NoteContext)
  const handleSubmit = (e) =>{
    e.preventDefault()
    addNote(note)
    setNote('')
  }
  return (
    <form onSubmit={handleSubmit} className="box-form">
        <input type="text" className='field' placeholder='O que deseja anotar?' value={note} onChange={(e)=>setNote(e.target.value)} />
        <button type="submit" className="btn btn-add" onClick={handleSubmit}>Add <MdAdd></MdAdd></button>
    </form>
  )
}

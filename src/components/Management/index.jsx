import React, { useContext, useState } from 'react'
import './style.css'
import {AiOutlineClose} from 'react-icons/ai'
import { NoteContext } from '../../context/noteContext'

const Management = ({type}) => {
  const {showModal, closeModal, currentNote, saveNoteDesc, saveNoteBg} = useContext(NoteContext)
  const [newDesc, setNewDesc] = useState('')
  const [bg, setBg] = useState('#212121')
  // console.log('nota a ser editada: ' +currentNote.desc)
  const handleModal = () =>{
    closeModal()
  }
  const handleChange = (e) =>{
    e.preventDefault()
    saveNoteDesc(newDesc)
    setNewDesc('')
  }
  const handleBg = (e) =>{
    e.preventDefault()
    saveNoteBg(bg)
    setBg('')
  }
  return (
    <div className='manage-modal'>
      <AiOutlineClose className='manage-modal__close' onClick={handleModal}></AiOutlineClose>
        {type == 'desc' && <>
          <form onSubmit={handleChange} className='modal-form'>
            <h2 className="manage-modal__title">Editar anotação</h2>
          <input className='modal-form__field' type="text" placeholder={currentNote.desc} onChange={(e)=>setNewDesc(e.target.value)}/>
          <button type="submit" className="modal-form__btn" onClick={handleChange}>Save</button>
          </form>
       </>}
        {type == 'bg' && <><form onSubmit={handleBg} className='modal-form'>
        <h2 className="manage-modal__title">Selecione um novo background para sua nota:</h2>
        <p className="modal-form__current-note">
        {currentNote.desc}
        </p>
          <input className='modal-form__field--color' type="color" value={bg} onChange={(e)=>setBg(e.target.value)}/>
          <button type="submit" className="modal-form__btn" onClick={handleBg}>Save</button>
        </form></>}
    </div>
  )
}

export default Management
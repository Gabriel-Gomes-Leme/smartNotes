import { createContext, useState } from "react";

export const NoteContext = createContext()
export const NoteProvider = ({children}) =>{
    const [desc, setDesc] = useState('')
    const [search, setSearch] = useState('')
    const data = localStorage.getItem("notas")
    const [notes, setNotes] = useState(data ? JSON.parse(data) : [])
    const [notesSearched, setNotesSearched] = useState([])
    const [type, setType] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [currentNote, setCurrentNote] = useState([])
    const addNote = (desc) =>{
        const noteObj ={
            id:generateId(),
            desc: desc,
            bg: "#1a1a1b",
            fixed:false
        }
        const newNotes = [...notes, noteObj]
        setNotes(newNotes)
        localStorage.setItem("notas", JSON.stringify(newNotes))
    }
    function generateId(){
        return Math.floor(Math.random() * 50000)
    }
    const searchNote = (search) =>{
        setSearch(search)
        const result = notes.filter((note) => note.desc.toLowerCase().includes(search.toLowerCase()))
        setNotesSearched(result)
    }
    const editNoteDesc = (current) =>{
        setType('desc')
        setShowModal(!showModal)
        setCurrentNote(current)
    }
    const editNoteBg = (current) =>{
        setShowModal(!showModal)
        setType('bg')
        setCurrentNote(current)
    }
    const saveNoteDesc = (newDesc) =>{
        setShowModal(!showModal)
        currentNote.desc = newDesc
        console.log('Nova descrição da nota:  ' +currentNote.desc)
        const updatedArray = notes.map(note => {
            if (note.id === currentNote.id) {
              return { ...note, desc: currentNote.desc };
            }
            return note;
          });
          console.log(updatedArray)
          setNotes(updatedArray)
          localStorage.setItem("notas", JSON.stringify(updatedArray))
    }
    const saveNoteBg = (bg) =>{
        setShowModal(!showModal)
        currentNote.bg = bg
        console.log("novo background: " +currentNote.bg)
        const updatedArray = notes.map(note =>{
            if (note.id === currentNote.id){
                return {...note, bg:currentNote.bg}
            }
            return note
        })
        setNotes(updatedArray)
        localStorage.setItem("notas", JSON.stringify(updatedArray))
    }
    const removeNote = (removedNote) =>{
        const updatedArray = notes.filter((note) => note.id != removedNote.id)
        setNotes(updatedArray)
        localStorage.setItem("notas", JSON.stringify(updatedArray))
    }
    const closeModal = () =>{
        setShowModal(false)
    }
    return (
        <NoteContext.Provider value={{desc, addNote, notes, searchNote, search, notesSearched, editNoteDesc, editNoteBg, type, showModal, closeModal, currentNote, saveNoteDesc, saveNoteBg, removeNote}}>{children}</NoteContext.Provider>
    )
}
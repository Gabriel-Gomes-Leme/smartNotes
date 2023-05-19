import { useContext, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { NoteContext } from './context/noteContext'
import { Note } from './components/Note'

function App() {
  const [count, setCount] = useState(0)
  const {notes, search, notesSearched} = useContext(NoteContext)
  console.log(search)
  return (
    <div className="App">
      <Header></Header>
      <main>
        <section>
          <div className="flex-center">
          <Form></Form>
          </div>
        </section>
        <section>
          <div className="wrapper">
          <div className="container-notes">
           {search != "" && notesSearched.map((note)=>(
            <Note key={note.id} note={note}></Note>
           ))}
           {search == "" && notes.map((note)=>(
              <Note key={note.id} note={note}></Note>
            ))}
          </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

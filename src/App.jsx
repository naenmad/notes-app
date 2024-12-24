import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';
import './styles/style.css'; 
import icon from '/public/icon.svg'; 
import  { getInitialData } from './utils/index';

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));
  };

  const archiveNote = (id) => {
    setNotes(notes.map(note => (note.id === id ? { ...note, archived: !note.archived } : note)));
  };

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeNotes = filteredNotes.filter(note => !note.archived);
  const archivedNotes = filteredNotes.filter(note => note.archived);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <header className="App-header">
        <img src={icon} alt="App Icon" className="App-icon" />
        <h1>Notes App</h1>
        <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <h2>Search Notes</h2>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <h2>Add Notes</h2>
      <NoteForm addNote={addNote} />
      <h2>Active Notes</h2>
      <NoteList notes={activeNotes} deleteNote={deleteNote} updateNote={updateNote} archiveNote={archiveNote} />
      <h2>Archived Notes</h2>
      <NoteList notes={archivedNotes} deleteNote={deleteNote} updateNote={updateNote} archiveNote={archiveNote} />
    </div>
  );
}

export default App;
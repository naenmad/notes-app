import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, deleteNote, updateNote, archiveNote }) {
  if (notes.length === 0) {
    return <p>Tidak ada catatan</p>;
  }

  return (
    <div>
      {notes.map(note => (
        <NoteItem key={note.id} note={note} deleteNote={deleteNote} updateNote={updateNote} archiveNote={archiveNote} />
      ))}
    </div>
  );
}

export default NoteList;
import React, { useState } from 'react';

function NoteItem({ note, deleteNote, updateNote, archiveNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedBody, setEditedBody] = useState(note.body);
  const [editedCategory, setEditedCategory] = useState(note.category);
  const [editedReminder, setEditedReminder] = useState(note.reminder);
  const [charLimit, setCharLimit] = useState(50 - note.title.length);

  const handleSave = () => {
    const updatedNote = {
      ...note,
      title: editedTitle,
      body: editedBody,
      category: editedCategory,
      reminder: editedReminder,
    };
    updateNote(updatedNote);
    setIsEditing(false);
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 50) {
      setEditedTitle(value);
      setCharLimit(50 - value.length);
    }
  };

  return (
    <div className="note-item">
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={editedTitle} 
            onChange={handleTitleChange} 
            placeholder="Title" 
            required 
          />
          <p className="char-limit">Characters left: {charLimit}</p>
          <textarea 
            value={editedBody} 
            onChange={(e) => setEditedBody(e.target.value)} 
            placeholder="Body" 
            required 
          />
          <select 
            value={editedCategory} 
            onChange={(e) => setEditedCategory(e.target.value)}
          >
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
          </select>
          <input 
            type="datetime-local" 
            value={editedReminder} 
            onChange={(e) => setEditedReminder(e.target.value)} 
            placeholder="Reminder" 
          />
          <button className="save" onClick={handleSave}>Save</button>
          <button className="cancel" onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
          <p className="category"><strong>Category:</strong> {note.category}</p>
          {note.reminder && <p className="reminder"><strong>Reminder:</strong> {new Date(note.reminder).toLocaleString()}</p>}
          <button className="edit" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="archive" onClick={() => archiveNote(note.id)}>
            {note.archived ? 'Unarchive' : 'Archive'}
          </button>
          <button className="delete" onClick={() => deleteNote(note.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default NoteItem;
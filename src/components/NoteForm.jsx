import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('General');
  const [reminder, setReminder] = useState('');
  const [charLimit, setCharLimit] = useState(50);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: +new Date(),
      title,
      body,
      category,
      reminder,
      archived: false,
      createdAt: new Date().toISOString()
    };
    addNote(newNote);
    setTitle('');
    setBody('');
    setCategory('General');
    setReminder('');
    setCharLimit(50);
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 50) {
      setTitle(value);
      setCharLimit(50 - value.length);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input 
        type="text" 
        id="title"
        value={title} 
        onChange={handleTitleChange} 
        placeholder="Title" 
        required 
      />
      <p className="char-limit">Characters left: {charLimit}</p>
      <label htmlFor="body">Body</label>
      <textarea 
        id="body"
        value={body} 
        onChange={(e) => setBody(e.target.value)} 
        placeholder="Body" 
        required 
      />
      <label htmlFor="category">Category</label>
      <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="General">General</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
      <label htmlFor="reminder">Reminder</label>
      <input 
        type="datetime-local" 
        id="reminder"
        value={reminder} 
        onChange={(e) => setReminder(e.target.value)} 
        placeholder="Reminder" 
      />
      <div className="form-button-container">
        <button type="submit">Add Note</button>
      </div>
    </form>
  );
}

export default NoteForm;
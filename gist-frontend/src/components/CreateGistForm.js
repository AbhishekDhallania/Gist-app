import React, { useState } from 'react';
import { createGist } from '../api/axios';

const CreateGistForm = ({ onGistCreated }) => {
  const [formData, setFormData] = useState({
    owner: '',
    title: '',
    language: '',
    code: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createGist(formData);
      onGistCreated(); // refresh list
      setFormData({ owner: '', title: '', language: '', code: '' });
    } catch (err) {
      console.error('Failed to create gist:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input name="owner" value={formData.owner} onChange={handleChange} placeholder="Owner" required />
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
      <input name="language" value={formData.language} onChange={handleChange} placeholder="Language" required />
      <textarea name="code" value={formData.code} onChange={handleChange} placeholder="Code" required />
      <button type="submit">Create Gist</button>
    </form>
  );
};

export default CreateGistForm;

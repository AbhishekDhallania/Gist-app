import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSnippet } from '../features/snippets/snippetSlice';


const CreateSnippetForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    code: '',
    language: '',
  });

  const dispatch = useDispatch();
  const { loading = false, error = null } = useSelector((state) => state.snippets || {});


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSnippet(formData));
    setFormData({ title: '', code: '', language: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold">Create New Snippet</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="w-full border p-2 rounded"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="language"
        placeholder="Language (e.g. JavaScript)"
        className="w-full border p-2 rounded"
        value={formData.language}
        onChange={handleChange}
      />
      <textarea
        name="code"
        placeholder="Your code..."
        className="w-full border p-2 rounded h-40"
        value={formData.code}
        onChange={handleChange}
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Saving...' : 'Create Snippet'}
      </button>
    </form>
  );
};

export default CreateSnippetForm;

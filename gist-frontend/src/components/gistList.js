import React, { useEffect, useState } from 'react';
import { getAllGists } from '../api/axios';
import CreateGistForm from './CreateGistForm';

const GistList = () => {
  const [gists, setGists] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getAllGists();
      setGists(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Create a Gist</h2>
      <CreateGistForm onGistCreated={fetchData} />

      <h2>All Gists</h2>
      <ul>
        {gists.map((gist) => (
          <li key={gist._id}>
            <h3>{gist.title}</h3>
            <p>{gist.language}</p>
            <pre>{gist.code}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GistList;

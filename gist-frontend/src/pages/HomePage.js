import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSnippets } from '../features/snippets/snippetSlice';

import SnippetList from '../components/SnippetList';
import CreateSnippetForm from '../components/CreateSnippetForm';

const HomePage = () => {
const dispatch = useDispatch();
const { snippets, loading, error } = useSelector((state) => state.snippets);

useEffect(() => {
dispatch(getAllSnippets());
}, [dispatch]);

return (
<div>
    <h1 className="text-2xl font-bold mb-4">My Snippets</h1>
        <CreateSnippetForm />
        <SnippetList />
    {loading && <p>Loading...</p>}
    {error && <p className="text-red-500">{error}</p>}
    <ul>
    {snippets.map((snippet) => (
    <li key={snippet._id} className="mb-4 p-2 border rounded">
    <h2 className="text-xl font-semibold">{snippet.title}</h2>
    <pre className="bg-gray-100 p-2 mt-2">{snippet.code}</pre>
    <p className="text-sm text-gray-500">{snippet.language}</p>
    </li>
      ))}
    </ul>
    </div>
  );
};

export default HomePage;


// import React from 'react';
// import CreateSnippetForm from '../components/CreateSnippetForm';
// import SnippetList from '../components/SnippetList';

// const HomePage = () => {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4">My Snippets</h1>
//       <CreateSnippetForm />
//       <SnippetList />
//     </div>
//   );
// };

// export default HomePage;

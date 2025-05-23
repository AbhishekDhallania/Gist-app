// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllSnippets } from '../features/snippets/snippetSlice';


// const SnippetList = () => {
//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.snippets || {});


//   useEffect(() => {
//     dispatch(getAllSnippets());
//   }, [dispatch]);

//   if (loading) return <p>Loading snippets...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="mt-6 space-y-4">
//       <h2 className="text-xl font-semibold mb-2">All Snippets</h2>
//       {snippets.length === 0 ? (
//         <p>No snippets found.</p>
//       ) : (
//         snippets.map((snippet) => (
//           <div
//             key={snippet._id}
//             className="bg-gray-100 p-4 rounded shadow-sm border"
//           >
//             <h3 className="text-lg font-bold">{snippet.title}</h3>
//             <p className="text-sm text-gray-600 mb-2">{snippet.language}</p>
//             <pre className="bg-white p-3 rounded overflow-x-auto whitespace-pre-wrap">
//               {snippet.code}
//             </pre>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default SnippetList;

import React from 'react';
import { useSelector } from 'react-redux';

function SnippetList() {
  const { snippets, loading, error } = useSelector((state) => state.snippets || {});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {snippets?.map((snippet) => (
        <div key={snippet._id} className="border p-2 my-2">
          <pre>{snippet.code}</pre>
        </div>
      ))}
    </div>
  );
}

export default SnippetList;

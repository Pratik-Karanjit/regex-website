// import React, { useState } from 'react';
// import Tabs from './Tabs';
// import Axios from 'axios';

// const HomePage = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredPatterns, setFilteredPatterns] = useState([]);
  

//   const handleSearch = async () => {
//     try {
//       const response = await fetchRegexPatterns({ query: searchQuery });
//       setFilteredPatterns(response.data);
//     } catch (error) {
//       console.error('Error fetching regex patterns:', error);
//     }
//   };

//   const fetchRegexPatterns = async (queryParams) => {
//     try {
//       const response = await Axios.get('http://localhost:8000/users/search', {
//         params: queryParams,
//       });
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center">Search Regex Patterns</h1>
//       <div className="input-group mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search by requirements..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button className="btn btn-primary" onClick={handleSearch}>
//           Search
//         </button>
//       </div>

//       <div>
//         <h2>Matching Patterns</h2>
//         <ul className="list-group">
//         {filteredPatterns.length > 0 ? (
//   <ul className="list-group">
//      {filteredPatterns && filteredPatterns.length > 0 ? (
//           <ul className="list-group">
//             {filteredPatterns.map((pattern) => (
//               <li key={pattern.id} className="list-group-item">
//                 <strong>Name:</strong> {pattern.name}
//                 <br />
//                 <strong>Requirements:</strong> {pattern.requirements}
//                 <br />
//                 <strong>Pattern:</strong> {pattern.pattern}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No matching patterns found.</p>
//         )}
//   </ul>
// ) : (
//   <p>No matching patterns found.</p>
// )}

//         </ul>
//       </div>
//       <Tabs />
//     </div>
//   );
// };

// export default HomePage;




import React, { useState } from 'react';
import Tabs from './Tabs';
import Axios from 'axios';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPatterns, setFilteredPatterns] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await Axios.get(`http://localhost:8000/users/search`, {
        params: { query: searchQuery },
      });

      if (response.status === 200) {
        const data = response.data;
        setFilteredPatterns(data);
      } else {
        console.error('Failed to fetch regex patterns.');
      }
    } catch (error) {
      console.error('Error fetching regex patterns:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Search Regex Patterns</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by requirements..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div>
        <h2>Matching Patterns</h2>
        {filteredPatterns && filteredPatterns.length > 0 ? (
          <ul className="list-group">
            {filteredPatterns.map((pattern) => (
              <li key={pattern.id} className="list-group-item">
                <strong>Name:</strong> {pattern.name}
                <br />
                <strong>Requirements:</strong> {pattern.requirements}
                <br />
                <strong>Pattern:</strong> {pattern.pattern}
              </li>
            ))}
          </ul>
        ) : (
          <p>No matching patterns found.</p>
        )}
      </div>
      <Tabs />
    </div>
  );
};

export default HomePage;

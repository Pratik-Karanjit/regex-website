import React, { useState } from 'react';
import Tabs from './Tabs';
import Axios from 'axios';
import logo from '../ProjectCSS/Regex website logo.png'

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

  const handleCopyPattern = (patternText) => {
    // You can implement the copy functionality here
    // For example, you can use the Clipboard API to copy the patternText to the clipboard
    // Here's a basic example:
    navigator.clipboard.writeText(patternText)
      .then(() => {
        console.log('Pattern copied to clipboard');
      })
      .catch((error) => {
        console.error('Error copying pattern to clipboard:', error);
      });
  };

  return (
    <div className="container mt-3"> {/* Updated margin-top to mt-3 */}
      <div className="row">
        <div className="col-12 text-center">
          <img src={logo} alt="Image Description" style={{ maxWidth: '200px' }} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <h1>Search Regex Patterns</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
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
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center">Matching Patterns</h2>
          {filteredPatterns && filteredPatterns.length > 0 ? (
            <ul className="list-group">
              {filteredPatterns.map((pattern) => (
                <li key={pattern.id} className="list-group-item">
                  <strong>Name:</strong> {pattern.name}
                  <br />
                  <strong>Requirements:</strong> {pattern.requirements}
                  <br />
                  <strong>Pattern:</strong> {pattern.pattern}
                  <br />
                  <button
                    className="btn btn-primary"
                    onClick={() => handleCopyPattern(pattern.pattern)}
                  >
                    Copy Pattern
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center">No matching patterns found.</p>
          )}
        </div>
      </div>
      <Tabs />
    </div>
  );
};

export default HomePage;

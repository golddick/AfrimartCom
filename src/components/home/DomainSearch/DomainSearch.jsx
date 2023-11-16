import React, { useState } from 'react';
import axios from 'axios';
import Heading from '../../common/Heading';
import './DomainSearch.css'

const DomainSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.domainr.com/v2/search?query=${query}`
        // Add any additional parameters or filters as needed
      );

      setResults(response.data.results);
    } catch (error) {
      console.error('Error fetching domain search results:', error);
    }
  }; 

  return (
    <div className='DomainSearch container' >
      {/* <h2 className='DomainSearchText'>Domain Search</h2> */}
      <Heading title='Domain Search' subtitle='In Afrimart We offer customers ability to search for available domain and are able to purchase it ' />
      <input
        className="DomainSearchInput"
        type="text"
        placeholder="Enter domain search query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} className='DomainSearchBtn'>Search</button>
      <div className='DomainSearchResult'> 
        {results.map((result) => (
          <div key={result.domain}>
            <p>Domain: {result.domain}</p>
            <p>Status: {result.status}</p>
            {/* Add more details from the API response as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DomainSearch;

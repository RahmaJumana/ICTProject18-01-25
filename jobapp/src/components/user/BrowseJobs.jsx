import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'


const BrowseJobs = () => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div style={{ padding: '20px' }}>
      <br/><br/><br/><br/>
      <h1>Browse Jobs</h1>
      <p>Here you can browse all available job listings.</p>
      <div className="search-container">
      <div className="search-icon-wrapper">
          <SearchIcon />
          </div>
      <input
          className="search-input"
          type="text"
          placeholder="Search jobs…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="search"
        />
    </div>
    </div>
  )
}

export default BrowseJobs
















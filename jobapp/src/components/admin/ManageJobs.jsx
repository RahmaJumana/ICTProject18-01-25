import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'

const ManageJobs = () => {

  const [jobs, setJobs] = useState([])
  const [form, setForm] = useState({
    title: '', description: '', requirements: '',
    location: '', salary: '', jobType: 'Full Time',
  })

  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:3005/view')
      setJobs(response.data)
    } catch (error) {
      console.error('Failed to fetch jobs', error)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleAddJob = async (e) => {
    e.preventDefault()
      try {
        await axios.post('http://localhost:3005/add', form)
      setForm({ title: '', description: '', requirements: '', location: '', salary: '', jobType: 'Full Time' })
      fetchJobs()
      alert("job added successfully")
    } catch (error) {
      console.error('Failed to add job', error)
    }
  }

  const handleDeleteJob = async (id) => {
    console.log('Deleting job with ID:', id)
    try {
      await axios.delete(`http://localhost:3005/remove/${id}`)
      fetchJobs()
    } catch (error) {
      console.error('Failed to delete job', error)
    }
  }
  //   setJobs(jobs.filter((job) => job.id !== id))
  // }

  const handleUpdateJob = async (id) => {
    const jobToUpdate = jobs.find((job) => job.id === id)
    if (jobToUpdate) {
      setForm(jobToUpdate)
      try {
        await axios.put(`http://localhost:3005/update/${id}`, form)
        setForm({
          title: '',
          description: '',
          requirements: '',
          location: '',
          salary: '',
          jobType: 'Full Time',
        })
        fetchJobs() 
      } catch (error) {
        console.error('Failed to update job', error)
      }
    }
  }
  //     setJobs(jobs.filter((job) => job.id !== id))
  //   }
  // }

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        backgroundImage: 'url("/path-to-your-background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#FFFFFF',
      }}
    >
      <Sidebar />
      <div
        style={{
          flex: 1,
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <h1 style={{ fontWeight: 'bold', color: '#FFB400' }}>Manage Jobs</h1>
        <p style={{ fontSize: '1.2rem' }}>
          Here you can add, edit, and manage all job postings. Use the options
          below to make updates.
        </p>
        <form onSubmit={handleAddJob} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h3 style={{ color: '#333' }}>Add a New Job</h3>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: '#333' }}>
              Job Title: <br />
              <input type="text" name="title" value={form.title} onChange={handleInputChange} style={{ width: '100%', padding: '8px' }} required />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: '#333' }}>
              Description: <br />
              <textarea
                name="description"
                value={form.description}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px' }}
                rows="3"
                required
              />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: '#333' }}>
              Requirements: <br />
              <textarea
                name="requirements"
                value={form.requirements}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px' }}
                rows="3"
              />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: '#333' }}>
              Location: <br />
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px' }}
                required
              />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: '#333' }}>
              Salary: <br />
              <input
                type="number"
                name="salary"
                value={form.salary}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px' }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: '#333' }}>
              Job Type: <br />
              <select
                name="jobType"
                value={form.jobType}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px' }}
              >
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Internship</option>
                <option>Contract</option>
              </select>
            </label>
          </div>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Add Job
          </button>
        </form>
        <div
          style={{
            padding: '20px',
            backgroundColor: 'rgba(31, 31, 46, 0.9)',
            borderRadius: '10px',
            color: '#FFFFFF',
          }}
        >
          <h2>Job Listings</h2>
          <p>List of jobs will be displayed here...</p>
          {jobs.length === 0 ? (
            <p>No jobs available. Add a new job to get started.</p>
          ) : (
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {jobs.map((job) => (
                <li key={job.id} style={{ marginBottom: '15px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
                  <h4>{job.title}</h4>
                  <p><strong style={{ color: '#FFD369' }}>Description:</strong> {job.description}</p>
                  <p><strong style={{ color: '#FFD369' }}>Requirements:</strong> {job.requirements}</p>
                  <p><strong style={{ color: '#FFD369' }}>Location:</strong> {job.location}</p>
                  <p><strong style={{ color: '#FFD369' }}>Salary:</strong> ${job.salary}</p>
                  <p><strong style={{ color: '#FFD369' }}>Job Type:</strong> {job.jobType}</p>
                  <button onClick={() => handleUpdateJob(job.id)} style={{ marginRight: '10px', padding: '5px 10px', backgroundColor: '#FFC107', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Update
                  </button>
                  <button onClick={() => handleDeleteJob(job.id)} style={{ padding: '5px 10px', backgroundColor: '#DC3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default ManageJobs







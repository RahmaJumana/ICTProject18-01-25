import React from 'react'
import Sidebar from './Sidebar.jsx'

const AdminDashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        {/* Add your main admin dashboard content here */}
        <h1>Welcome to the Admin Dashboard</h1>
        <p>Here you can manage jobs and view applications.</p>
      </div>
    </div>
  )
}

export default AdminDashboard

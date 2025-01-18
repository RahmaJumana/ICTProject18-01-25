import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Drawer, Box, Typography } from '@mui/material'




const UserDashboard = () => {
  const navigate = useNavigate()
  const handleBrowsing = () => {
    navigate('/browse-jobs')
  }
  const handleJobs = () => {
    navigate('/applied-jobs')
  }
  const handleLogout = () => {
    alert('Logged out successfully!');
    navigate('/login'); 
  }

  return (

    <Drawer
    variant="permanent"
    sx={{
      width: 240,
      [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
    }}
  >
    <Typography variant="h6" sx={{ textAlign: 'center', py: 2, borderBottom: '1px solid #ccc' }}>
     <b> User Dashboard</b>
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
      <Button variant="contained" sx={{ backgroundColor: '#35374B', color: '#FFFFFF', margin: '0 10px' }} onClick={handleBrowsing}>
        Browse Jobs
      </Button><br/><br/>
      <Button variant="contained" sx={{ backgroundColor: '#35374B', color: '#FFFFFF', margin: '0 10px' }} onClick={handleJobs}>
        Applied Jobs
      </Button><br/><br/>
      <Button variant="contained" sx={{ backgroundColor: '#35374B', color: '#FFFFFF', margin: '0 10px' }} onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  </Drawer>
  )
}

export default UserDashboard




    


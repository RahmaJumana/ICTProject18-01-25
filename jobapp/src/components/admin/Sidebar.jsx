import React from "react"
import { useNavigate } from "react-router-dom"
import { Box, Typography, Button } from "@mui/material"

const Sidebar = () => {
  const navigate = useNavigate()

  return (
    <div
      style={{
        width: "260px",
        backgroundColor: "#1E1F2F",
        color: "#FFFFFF",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h5"
        style={{
          fontWeight: "bold",
          marginBottom: "30px",
          textAlign: "center",
          color: "#E0E0E0",
          borderBottom: "1px solid #35374B",
          paddingBottom: "10px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/admin-dashboard")}
      >
        Admin Dashboard
      </Typography>

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <Button
          variant="contained"
          style={{
            backgroundColor: "#35374B",
            color: "#FFFFFF",
            textTransform: "none",
            fontSize: "16px",
            padding: "12px 20px",
            borderRadius: "8px",
            transition: "background-color 0.3s ease",
          }}
          onClick={() => navigate("/manage-jobs")}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#4A4C65")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#35374B")}
        >
          Manage Jobs
        </Button>

        <Button
          variant="contained"
          style={{
            backgroundColor: "#35374B",
            color: "#FFFFFF",
            textTransform: "none",
            fontSize: "16px",
            padding: "12px 20px",
            borderRadius: "8px",
            transition: "background-color 0.3s ease",
          }}
          onClick={() => navigate("/view-user-applications")}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#4A4C65")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#35374B")}
        >
          View Applications
        </Button>

        {/* Logout button */}
        <Button
          variant="contained"
          style={{
            backgroundColor: "#FF3B30", // Red color for logout
            color: "#FFFFFF",
            textTransform: "none",
            fontSize: "16px",
            padding: "12px 20px",
            borderRadius: "8px",
            transition: "background-color 0.3s ease",
            marginTop: "auto", // Pushes the logout button to the bottom
          }}
          onClick={() => navigate("/")} // Navigate to home page on logout
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#FF5E3A")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#FF3B30")}
        >
          Logout
        </Button>
      </Box>
    </div>
  )
}

export default Sidebar

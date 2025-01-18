import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(90deg, #1a3b5d, #162c49)",
          padding: "10px 0",
          margin: 0,
        }}
      >
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              fontSize: "1.8rem",
              color: "#ffffff",
            }}
          >
            <b>Job Portal</b>
          </Typography>

          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ffffff",
                color: "#162c49",
                borderRadius: "20px",
                padding: "10px 20px",
                margin: "0 10px",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#e3e3e3",
                },
              }}
            >
              Home
            </Button>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ffffff",
                color: "#162c49",
                borderRadius: "20px",
                padding: "10px 20px",
                margin: "0 10px",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#e3e3e3",
                },
              }}
            >
              Login
            </Button>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ffffff",
                color: "#162c49",
                borderRadius: "20px",
                padding: "10px 20px",
                margin: "0 10px",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#e3e3e3",
                },
              }}
            >
              Signup
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

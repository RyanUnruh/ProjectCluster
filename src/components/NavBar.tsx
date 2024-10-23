import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.navbar}>
      <button onClick={() => navigate("/")} style={styles.button}>
        Home
      </button>
      <button onClick={() => navigate("/tictactoe")} style={styles.button}>
        Tic Tac Toe
      </button>
      <button onClick={() => navigate("/tasklist")} style={styles.button}>
        Task List
      </button>
    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "center", // Center the buttons horizontally
    alignItems: "center",
    backgroundColor: "#1976d2", // MUI primary blue color
    padding: "10px",
    height: "60px",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for navbar
  },
  button: {
    margin: "0 15px", // Spacing between buttons
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "500",
    backgroundColor: "#ffffff", // White background
    color: "#1976d2", // MUI primary blue text
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease", // Animation on hover
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Button shadow
  },
  buttonHover: {
    backgroundColor: "#1565c0", // Darker blue on hover
    transform: "scale(1.05)", // Slightly larger on hover
  },
};

export default Navbar;

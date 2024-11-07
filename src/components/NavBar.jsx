import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const styles = {
    nav: {
      display: "flex",
      width: "500px",
      position: "absolute",
      top: "10px",
      borderRadius: "10px",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#6ba6e1",
      padding: "10px",
      height: "60px",
      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    },
    button: {
      padding: "10px 20px",
      margin: "5px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      color: "#00000089",
      fontSize: "16px",
      fontWeight: "bold",
      background: "#ffffff",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "all 0.3s ease",
    },
  };

  return (
    <div style={styles.nav}>
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

export default Navbar;

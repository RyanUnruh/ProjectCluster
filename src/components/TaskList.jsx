import React, { useEffect, useState } from "react";

const TaskList = () => {
  const [item, setItem] = useState({ subject: "", details: "" });
  const [list, setList] = useState([]);

  useEffect(() => {}, [list]);

  const handleOnSave = () => {
    const newItem = { ...item, color: getRandomColor() };
    setList((prev) => [...prev, newItem]);
    setItem({ subject: "", details: "" });
  };
  console.log(list);
  console.log(Math.floor(Math.random() * list.length));
  const getRandomColor = () => {
    const colors = ["#8ecae6", "#219ebc", "#023047", "#0077b6", "#4cc9f0"];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  const styles = {
    container: { backgroundColor: "#ffb703", borderRadius: "10px", padding: "20px", marginTop: "10px", minHeight: "100px" },
    item: { minHeight: "30px", borderRadius: "10px" },
    subject: { color: "white", margin: "0px", fontSize: "18px" },
    details: { color: "white", margin: "0px", fontSize: "15px" },
    button: {
      padding: "10px 20px",
      margin: "5px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "bold",
      background: "#219ebc",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "all 0.3s ease",
    },
    hover: {
      transform: "translateY(-2px)",
      boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
      background: "linear-gradient(135deg, #5a53ff, #3d42b3)",
    },
  };

  const ListItem = ({ item }) => {
    return (
      <div style={{ ...styles.item, backgroundColor: item.color, marginTop: "10px", padding: "10px" }}>
        <h5 style={styles.subject}>{item.subject}</h5>
        {item.details && (
          <>
            <p style={styles.details}>{item.subject}</p>
          </>
        )}
      </div>
    );
  };
  return (
    <>
      <h3>Task List</h3>
      <div style={styles.container} id="container">
        <div>
          <input style={styles.button} placeholder="Subject" value={item.subject} onChange={(e) => setItem((prevItem) => ({ ...prevItem, subject: e.target.value }))} type="text" />
          <input style={styles.button} placeholder="Details" value={item.details} onChange={(e) => setItem((prev) => ({ ...prev, details: e.target.value }))} type="text" />
          <button style={styles.button} disabled={item.subject === ""} onClick={handleOnSave}>
            Save Task
          </button>
        </div>
        <br />
        <div>
          {list.map((item, i) => (
            <ListItem key={i} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default TaskList;

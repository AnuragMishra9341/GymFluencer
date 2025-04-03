import React from "react";

export default function ExerciseSection() {
  const exercises = [
    "Back", "Cardio", "Chest", "Lower Arms", "Lower Legs", "Neck",
    "Shoulders", "Upper Arms", "Upper Legs", "Waist"
  ];

  const sectionStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "60px 20px",
    textAlign: "center",
    borderTop: "4px solid #FFD700",  // Gold border at the top
    marginTop: "30px"  // Space between the search bar and exercise section
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
    maxWidth: "1000px",
    margin: "0 auto"
  };

  const itemStyle = {
    backgroundColor: "#333",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.1)",
    transition: "background-color 0.3s, transform 0.3s",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#FFD700",  // Gold text color
    textTransform: "uppercase"
  };

  return (
    <section style={sectionStyle}>
      <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#FFD700", marginBottom: "30px" }}>
        Exercise Categories
      </h2>
      <div style={gridStyle}>
        {exercises.map((exercise, index) => (
          <div
            key={index}
            style={itemStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#444";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#333";
              e.target.style.transform = "scale(1)";
            }}
          >
            {exercise}
          </div>
        ))}
      </div>
    </section>
  );
}
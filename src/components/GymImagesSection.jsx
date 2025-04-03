export default function GymImagesSection() {
  const images = [
    "https://img.freepik.com/free-photo/black-dumbbells-with-different-weight_7502-8973.jpg?ga=GA1.1.1427314835.1727880811&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/fitness-equipment_53876-138086.jpg?ga=GA1.1.1427314835.1727880811&semt=ais_hybrid",
    "https://img.freepik.com/premium-photo/fitness-room_47474-105.jpg?ga=GA1.1.1427314835.1727880811&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114201.jpg?ga=GA1.1.1427314835.1727880811&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/kettlebell-gym-equipment-still-life_23-2151739248.jpg?ga=GA1.1.1427314835.1727880811&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/gym-with-indoor-cycling-equipment_23-2149270210.jpg?ga=GA1.1.1427314835.1727880811&semt=ais_hybrid"
  ];

  const sectionStyle = {
    backgroundColor: "black",
    padding: "60px 20px",
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto"
  };

  const gridStyle = {
    display: "grid",
    gap: "20px",
    maxWidth: "100%",
    margin: "0 auto",
    gridTemplateColumns: "repeat(3, 1fr)", // Default: 3 images per row
  };

  const imageContainerStyle = {
    position: "relative",
    overflow: "hidden",
    borderRadius: "15px",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out"
  };

  const imageStyle = {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "15px",
    transition: "opacity 0.3s ease-in-out"
  };

  return (
    <section style={sectionStyle}>
      <h2 style={{ color: "white", fontSize: "28px", marginBottom: "20px" }}>Gym Gallery</h2>
      <div style={gridStyle}>
        {images.map((src, index) => (
          <div
            key={index}
            style={imageContainerStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={src} alt="Gym Equipment" style={imageStyle} />
          </div>
        ))}
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 1024px) {
            div[style*="gridTemplateColumns"] {
              grid-template-columns: repeat(2, 1fr); /* 2 images per row on tablets */
            }
          }

          @media (max-width: 600px) {
            div[style*="gridTemplateColumns"] {
              grid-template-columns: repeat(1, 1fr); /* 1 image per row on phones */
            }
          }
        `}
      </style>
    </section>
  );
}

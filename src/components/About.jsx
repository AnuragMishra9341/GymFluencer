
import React, { useRef } from "react";
import gymVideo from "../assets/Videos/gym Video project.mp4";
import interior from "../assets/Videos/interior.mp4";
import GymImagesSection from "./GymImagesSection";
import "./About.css";

const About = () => {
  const gymVideoRef = useRef(null);
  const interiorVideoRef = useRef(null);

  return (
    <div style={{ textAlign: "center", color: "#fff", backgroundColor: "#000", padding: "20px" }}>
      <h2 style={{ color: "#FFC107", fontSize: "2rem", fontWeight: "bold" }}>Transform Your Fitness Journey</h2>
      <p style={{ color: "#CCCCCC", fontSize: "1.2rem" }}>
        At <span style={{ color: "#FF3B30" }}>[Arnold's Gym]</span>, we believe fitness is not just about lifting weights—it's about building a stronger, healthier you!
      </p>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
        <div style={{ maxWidth: "100%", flex: "1" }}>
          <video ref={gymVideoRef} style={{ width: "100%", borderRadius: "10px" }} autoPlay muted loop>
            <source src={gymVideo} />
          </video>
        </div>
        <div style={{ maxWidth: "100%", flex: "1" }}>
          <video ref={interiorVideoRef} style={{ width: "100%", borderRadius: "10px" }} autoPlay muted loop>
            <source src={interior} />
          </video>
        </div>
      </div>

      <footer style={{ backgroundColor: "black", color: "#FFD700", padding: "20px", fontSize: "1.2rem", fontWeight: "bold", textTransform: "uppercase" }}>
        "Push yourself because no one else is going to do it for you."
      </footer>

      <section style={{ padding: "40px 20px" }}>
        <h1>About Arnold's Gym</h1>
        <p>Where Strength Meets Dedication</p>

        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "15px" }}>
          <div style={{ backgroundColor: "#222", padding: "20px", borderRadius: "10px", width: "300px" }}>
            <h2>24/7 Access</h2>
            <p>Train anytime, day or night.</p>
          </div>
          <div style={{ backgroundColor: "#222", padding: "20px", borderRadius: "10px", width: "300px" }}>
            <h2>Expert Trainers</h2>
            <p>Get guidance from professionals.</p>
          </div>
          <div style={{ backgroundColor: "#222", padding: "20px", borderRadius: "10px", width: "300px" }}>
            <h2>Modern Equipment</h2>
            <p>Top-tier machines for ultimate gains.</p>
          </div>
        </div>

        <h2>Inside Our Gym</h2>
        <GymImagesSection />

        <h2>What Our Members Say</h2>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "15px" }}>
          <div style={{ backgroundColor: "#222", padding: "20px", borderRadius: "10px", width: "300px" }}>
            <p>"Arnold's Gym transformed my fitness journey!" - Alex</p>
          </div>
          <div style={{ backgroundColor: "#222", padding: "20px", borderRadius: "10px", width: "300px" }}>
            <p>"Best gym atmosphere ever!" - Sarah</p>
          </div>
          <div style={{ backgroundColor: "#222", padding: "20px", borderRadius: "10px", width: "300px" }}>
            <p>"Amazing trainers and equipment." - John</p>
          </div>
        </div>

        <h2>Join Us Today!</h2>
        <p>Become a part of the strongest community.</p>
        <button style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "red", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Get Started
        </button>
      </section>
    </div>
  );
};

export default About;
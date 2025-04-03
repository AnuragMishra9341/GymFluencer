import React from "react";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { exerciseOptions, fetchData } from "../fetchData.js";
import { useState } from "react";
import Cards from "./cards.jsx";
import ExerciseSection from "./ExerciseSection.jsx";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [valid, setValid] = useState(false);
  const [text, setText] = useState("");
  const [exerciseData, setExerciseData] = useState([]);

  const handleSearch = async () => {
    if (search) {
      try {
        let data = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${search.toLowerCase()}`,
          exerciseOptions
        );
        console.log(data);
        setExerciseData(data);

        if (Array.isArray(data) && data.length > 0) {
          setValid(true);
        } else {
          setValid(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setValid(false);
      }
    }

    setText("");
  };

  const handleSubmit = (event) => {
    setText(event.target.value);
    setSearch(event.target.value);
    event.preventDefault();
  };

  return (
    <Box sx={{ marginLeft: { xs: "0", md: "250px" }, marginTop: "50px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",  // Space between input and search icon
          marginBottom: "40px",  // Add space below search bar for proper separation
        }}
      >
        <form id="search-bar" style={{ width: "100%",  maxWidth: "600px"}}>
          <input
            type="text"
            placeholder="Search for Exercise"
            style={{
              backgroundColor: "white",
              width: "100%",
              height: "50px",
              borderRadius: "15px",
              fontSize: "20px",
              padding: "10px 10px 10px 40px",
              border: "3px solid aqua",
              outline: "none",
              transition: "0.3s",
            }}
            value={text}
            onChange={handleSubmit}
          />
        </form>
        <SearchIcon
          sx={{
            backgroundColor:"white",
            color: "black",
            fontSize: "35px",
            transition: "0.3s",
            cursor: "pointer",
            "&:active": {
              transform: "scale(0.9)", // Click animation (shrinks on click)
            },
          }}
          onClick={handleSearch}
        />
      </div>

      {/* Centered ExerciseSection */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        {!valid ? (
          <h3 style={{ color: "white" }}>
            Please mention the exercise below <br /> <br /> <br />
            <ExerciseSection />
          </h3>
        ) : (
          <Cards data={exerciseData} />
        )}
      </div>
    </Box>
  );
};

export default SearchBar;

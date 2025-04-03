import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Stack, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import Videos from './Videos.jsx';

const ExerciseDetails = () => {
    const [videoData, setVideoData] = useState(null);
    const location = useLocation();
    const exercise = location.state?.exercise;

    // Fetch exercise videos
    const fetchExercisesData = useCallback(async () => {
        if (!exercise?.name) return;

        const url = "https://www.googleapis.com/youtube/v3/search";
        const apiKey = "AIzaSyDzZ-5BK-2i682YwwUdKUsTQmeJ4grfgHM";

        try {
            const response = await fetch(`${url}?part=snippet&q=${exercise.name}&type=video&maxResults=5&key=${apiKey}`);
            const data = await response.json();
            if (data?.items) setVideoData(data);
        } catch (error) {
            console.error("Error fetching exercise videos:", error);
        }
    }, [exercise]);

    // Fetch data when exercise changes
    useEffect(() => {
        fetchExercisesData();
    }, [fetchExercisesData]);

    if (!exercise) return <Typography>No Exercise Data Available</Typography>;

    return (
        <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 2, md: 3 } }}>
            <Typography variant="h2" sx={{ color: "white", textAlign: "center", mb: 2 }}>
                Description of the Exercise
            </Typography>

            <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center">
                <img 
                    src={exercise.gifUrl} 
                    alt="Exercise" 
                    style={{ 
                        width: "100%", 
                        maxWidth: "400px", 
                        border: "2px solid aqua", 
                        borderRadius: "10px" 
                    }} 
                />
                <Typography 
                    sx={{ 
                        color: "white", 
                        fontWeight: "bold", 
                        mt: { xs: 2, md: 4 }, 
                        lineHeight: "35px", 
                        fontSize: { xs: "18px", md: "25px" } 
                    }}
                >
                    {exercise.instructions?.join(" ")}
                </Typography>
            </Stack>

            <Typography sx={{ color: "red", textTransform: "uppercase", fontWeight: "bold", mt: 3, textAlign: "center" }}>
                Name of the exercise: {exercise.name}
            </Typography>

            <Box display="flex" justifyContent="center" mt={2}>
                <button 
                    style={{ 
                        backgroundColor: "peachpuff", 
                        borderRadius: "10px", 
                        textTransform: "uppercase", 
                        fontWeight: "bold", 
                        '&:hover': { backgroundColor: "#f5b7a0" }
                    }}
                >
                    {exercise.target}
                </button>
            </Box>

            {/* Render videos */}
            <Box mt={4}>
                {videoData ? <Videos data={videoData.items} /> : <Typography textAlign="center">Loading videos...</Typography>}
            </Box>
        </Box>
    );
};

export default ExerciseDetails;
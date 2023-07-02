import React from "react";
import { Box, Card, Typography } from "@mui/material";
// import about from "../assets/about.png";
function About() {
  return (
    <Box sx={{ marginTop: "15vh" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#8C52FF",
            fontSize: "1.875rem",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          About Us
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            borderRadius: 5,
            backgroundColor: "#819cff60",
            height: 500,
            width: "90%",
            elevation: 10,
          }}
        >
          <Box
            sx={{
              height: "90%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "1rem",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Jobtank- a digital recruitment solution app aimed at providing a
              seamless hiring experience for multiple MNCs.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "1rem",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Learn, Teach And Grow
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#8C52FF",
                fontSize: ".8rem",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Skill is Identity
            </Typography>
          </Box>
        </Card>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <img src="/logo.png" alt="" style={{ height: "56vh", width: "50vw" }} />
      </Box>
    </Box>
  );
}

export default About;

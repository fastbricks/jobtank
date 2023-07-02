"use client";
import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";

function JobCard(props) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <Card
          sx={{
            width: "80%",
            height: "10vh",
            backgroundColor: "#eee",
            boxShadow: "none",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <Box>
            <Typography className="company_title" sx={{ fontWeight: 500 }}>
              {props.title}
            </Typography>
            <Button
              className="company_btn"
              variant="contained"
              sx={{ backgroundColor: "rgb(123, 123, 249)" }}
            >
              {props.companyName}
            </Button>
          </Box>
          <Box>
            {props.skills.map((skill) => (
              <Button
                className="company_skill_btn"
                key={skill}
                variant="contained"
                sx={{
                  margin: "10px",
                  color: "rgb(123, 123, 249)",
                  backgroundColor: "#63e9e549",
                  ":hover": { backgroundColor: "#63e9e549" },
                }}
              >
                {skill}
              </Button>
            ))}
          </Box>
          <Box>
            <Typography className="company_title">
              {props.type}|{props.location}
            </Typography>
            <Button
              className="company_skill_btn"
              variant="outlined"
              sx={{ Color: "rgb(123, 123, 249)" }}
            >
              CheckIn
            </Button>
          </Box>
        </Card>
      </Box>
    </div>
  );
}

export default JobCard;

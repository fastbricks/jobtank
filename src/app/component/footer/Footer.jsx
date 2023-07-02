"use client";
import { Box, InputBase, Paper, Typography, styled, Link } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Card from "@mui/joy/Card";
import SendIcon from "@mui/icons-material/Send";

//css
const Wrapper = styled(Box)`
  background-color: #c1d1f8;
`;
const BoxStyle = styled(Box)`
  display: flex;
`;
const CardBox = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "grid",
  },
}));
const CardStyle = styled(Card)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "65vw",
  },
}));
function BottomFooter() {
  return (
    <Wrapper>
      <Paper
        elevation={3}
        sx={{
          backgroundColor: "#819cff60",
          height: 70,
          boxShadow: "none",
          display: "flex",
        }}
      >
        <Box
          sx={{
            margin: "8px",
            backgroundColor: "white",
            borderRadius: 2,
            marginTop: 1.4,
          }}
        >
          <Link href="https://www.instagram.com/anubhavray_/" target="_blank">
            <InstagramIcon
              sx={{ color: "#F27777", height: "100%", width: "auto" }}
            />
          </Link>
        </Box>
        <Box
          sx={{
            margin: "8px",
            backgroundColor: "white",
            borderRadius: 2,
            marginTop: 1.4,
          }}
        ></Box>

        <Box
          sx={{
            margin: "8px",
            backgroundColor: "white",
            borderRadius: 2,
            marginTop: 1.4,
          }}
        ></Box>

        <Box
          sx={{
            margin: "8px",
            backgroundColor: "white",
            borderRadius: 2,
            marginTop: 1.4,
          }}
        >
          <Link href="https://www.linkedin.com/in/anubhavray" target="_blank">
            <LinkedInIcon
              sx={{ color: "#007AB3", height: "100%", width: "auto" }}
            />
          </Link>
        </Box>

        <Typography
          sx={{
            fontSize: 40,
            color: "white",
            margin: "5px",
            marginLeft: "auto",
          }}
        >
          <b>Social</b>
        </Typography>
      </Paper>

      <Box sx={{ display: "grid", justifyContent: "space-evenly" }}>
        <CardBox sx={{ display: "flex" }}>
          <CardStyle
            sx={{
              height: "150px",
              width: "25vw",
              margin: "50px 50px 50px",
              backgroundColor: "#819cff60",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: 20, color: "white" }}>
              <b>Subscribe</b>
            </Typography>
            <Box sx={{ display: "flex" }}>
              <InputBase
                fullWidth={false}
                placeholder="Your Email Please....."
                sx={{
                  backgroundColor: "#f6e6f7",
                  color: "purple",
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  marginTop: 2,
                  paddingLeft: 1,
                  paddingRight: 1,
                  border: 2,
                  borderColor: "#f6e6f7",
                  width: "90%",
                  ":hover": { borderColor: "#8C52FF" },
                }}
              />
              <Box
                sx={{
                  backgroundColor: "#f6e6f7",
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  marginTop: 2,
                  paddingLeft: 1,
                  paddingRight: 1,
                }}
              >
                <SendIcon
                  type="Submit"
                  sx={{
                    marginTop: 1,
                    cursor: "pointer",
                    color: "#7d5ce0",
                    ":hover": { color: "#aa93ed" },
                  }}
                />
              </Box>
            </Box>
          </CardStyle>
          <CardStyle
            sx={{
              height: "150px",
              width: "25vw",
              margin: "50px 50px 50px",
              backgroundColor: "#819cff60",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: 20,
                color: "white",

                ":hover": {
                  color: "blue",
                  cursor: "pointer",
                },
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                color: "white",

                ":hover": {
                  color: "blue",
                  cursor: "pointer",
                },
              }}
            >
              Contact Us
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                color: "white",

                ":hover": {
                  color: "blue",
                  cursor: "pointer",
                },
              }}
            >
              Careers
            </Typography>
          </CardStyle>
        </CardBox>
        <CardStyle
          elevation={10}
          sx={{
            height: "150px",
            width: "50vw",
            margin: "50px 50px 50px",
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "none",
          }}
        >
          <BoxStyle>
            <img
              src="/logo.png"
              style={{ height: "110px", width: "160px" }}
              alt=""
            />

            <Box sx={{ marginTop: "10px" }}>
              <Typography sx={{ color: "white" }}>
                <b>Skill</b>
              </Typography>
              <Typography sx={{ color: "white" }}>
                <b>is</b>
              </Typography>
              <Typography sx={{ color: "white" }}>
                <b>Identity</b>
              </Typography>
            </Box>
          </BoxStyle>
        </CardStyle>
      </Box>

      <Box
        sx={{
          marginY: 1,
          height: 60,
          backgroundColor: "#819cff60",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 20, color: "#fff" }}>
            Hire Talent
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 15,
            color: "#fff",
          }}
        >
          <Typography>&copy;</Typography>
          <Typography>
            2023 Copyright |<b>JobTank</b>
            <vl></vl>
          </Typography>
        </Box>
      </Box>
    </Wrapper>
  );
}

export default BottomFooter;

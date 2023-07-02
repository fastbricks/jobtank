import { Box, Card, Typography, styled, Paper, Link } from "@mui/material";
import React from "react";
import logo from "../assets/logo.png";
import just from "../assets/justskill.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20vh",
      }}
    >
      <Card
        sx={{
          border: 5,
          borderColor: "#fff",
          borderRadius: 5,
          backgroundImage:
            "linear-gradient(to right, rgba(238, 73, 156, 1),rgba(171, 117, 230, 1))",
          height: 350,
          width: "80%",
          elevation: 10,
          position: "relative",
        }}
      >
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "1.875rem",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            <b>Feel free to contact us!</b>
          </Typography>
        </Box>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginTop: 2,
          }}
        >
          <BoxStyle>
            <img src={just} alt="" style={{ width: 200 }} />
            <Box>
              <img
                src={logo}
                alt=""
                className="App-logo"
                style={{ width: 80, height: 80 }}
              />
            </Box>
          </BoxStyle>
        </Box>

        <Paper
          elevation={3}
          sx={{
            backgroundColor: "transparent",
            height: 70,
            width: "100%",
            borderColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
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
            <Link href="http://www.google.com" target="_blank">
              <InstagramIcon
                sx={{
                  color: "#F27777",
                  height: "2.3rem",
                  width: "auto",
                  display: "flex",
                }}
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
          >
            <Link href="http://www.facebook.com" target="_blank">
              <FacebookIcon
                sx={{
                  color: "#3C5A99",
                  height: "2.3rem",
                  width: "auto",
                  display: "flex",
                }}
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
          >
            <Link href="http://www.google.com" target="_blank">
              <YouTubeIcon
                sx={{
                  color: "#F20E0E",
                  height: "2.3rem",
                  width: "auto",
                  display: "flex",
                }}
              />
            </Link>
          </Box>

          <Box
            sx={{ margin: "9px", backgroundColor: "white", borderRadius: 2 }}
          >
            <Link href="http://www.google.com" target="_blank">
              <LinkedInIcon
                sx={{
                  color: "#007AB3",
                  height: "2.3rem",
                  width: "auto",
                  display: "flex",
                }}
              />
            </Link>
          </Box>
        </Paper>
      </Card>
    </Box>
  );
}

export default Contact;

//css
const BoxStyle = styled(Box)`
  display: flex;
`;

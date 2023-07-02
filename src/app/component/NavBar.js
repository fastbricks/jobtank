"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LoginDialog from "./loginDialog";
import PostJobDialog from "./PostJobDialog";
import Menu from "./Menu";
export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#819cff60",
          color: "blue",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Box className="menu_mobile">
            <Menu />
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 900 }}
          >
            JobTank
          </Typography>
          <Box
            className="menu_mobile_text"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                marginRight: "30px",
                ":hover": {
                  textDecoration: "underline",
                  textDecorationColor: "blue",
                  textDecorationThickness: "3px",
                },
              }}
            >
              Job
            </Typography>
            <Typography
              sx={{
                marginRight: "30px",
                ":hover": {
                  textDecoration: "underline",
                  textDecorationColor: "blue",
                  textDecorationThickness: "3px",
                },
              }}
            >
              About
            </Typography>
            <Typography
              sx={{
                marginRight: "30px",
                ":hover": {
                  textDecoration: "underline",
                  textDecorationColor: "blue",
                  textDecorationThickness: "3px",
                },
              }}
            >
              Contact
            </Typography>
          </Box>
          <Box sx={{ margin: "10px" }}>
            <div>
              <PostJobDialog />
            </div>
          </Box>

          <div>
            <LoginDialog />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

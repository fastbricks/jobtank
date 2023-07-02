"use client";
import { Card, Box, Button } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function SearchBox() {
  const [full, setFull] = React.useState("");

  const handleChangeFull = (event) => {
    setFull(event.target.value);
  };
  const [remote, setRemote] = React.useState("");

  const handleChange = (event) => {
    setRemote(event.target.value);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <Card
          className="card_height"
          sx={{
            width: "80%",
            height: "20vh",
            backgroundColor: "#819cff34",
            boxShadow: "none",
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <Card
            className="grid-container "
            sx={{
              width: "90%",
              height: "70%",
              backgroundColor: "#ffffff7f",
              boxShadow: "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <Box className="textfield_box" sx={{ width: "350px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Job roles</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={full}
                  label="Job roles"
                  onChange={handleChangeFull}
                >
                  <MenuItem value={10}>Full Time</MenuItem>
                  <MenuItem value={20}>Part Time</MenuItem>
                  <MenuItem value={30}>Contract</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box className="textfield_box" sx={{ width: "350px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Job location
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={remote}
                  label=" Job location"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Remote</MenuItem>
                  <MenuItem value={20}>Hybrid</MenuItem>
                  <MenuItem value={30}>Work from Home</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button
              className="textfield_button"
              variant="contained"
              sx={{ width: "200px", height: "50px" }}
            >
              Search
            </Button>
          </Card>
        </Card>
      </Box>
    </Box>
  );
}

export default SearchBox;

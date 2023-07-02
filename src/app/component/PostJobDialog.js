import { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import Head from "next/head";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import { Box, Card, TextField, Divider, Typography } from "@mui/material";
import Link from "next/link";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const currencies = [
  {
    value: "R",
    label: "Remote",
  },
  {
    value: "H",
    label: "Hybrid",
  },
  {
    value: "W",
    label: "Work from Home",
  },
];

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "rgb(123, 123, 249)",
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function PostJobDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [state, setState] = useState({
    reactJs: true,
    flutter: false,
    Native: false,
    mongoDB: false,
    node: false,
    full: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { reactJs, flutter, Native, mongoDB, node, full } = state;
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          sx={{
            backgroundColor: "#819cff99",
            color: "blue",
            fontWeight: 600,
            ":hover": {
              backgroundColor: "#819cff99",
            },
          }}
        >
          Post Job
        </Button>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <div style={{ display: "grid" }}>
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              <Box sx={{ display: "grid", justifyContent: "center" }}>
                <Box sx={{ display: "grid", justifyContent: "center" }}></Box>
                <Typography className="nav_logo_text ">POST JOB</Typography>
              </Box>
            </BootstrapDialogTitle>
            <DialogContent>
              <Box>
                <Box>
                  <TextField
                    id="outlined-basic"
                    label="Job title"
                    variant="outlined"
                    required="true"
                    sx={{ padding: "5px", margin: "5px" }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Full Name"
                    variant="outlined"
                    required="true"
                    sx={{ padding: "5px", margin: "5px" }}
                  />
                </Box>
                <Box>
                  <TextField
                    id="outlined-basic"
                    label="Company Name"
                    variant="outlined"
                    required="true"
                    sx={{ padding: "5px", margin: "5px" }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Company url"
                    variant="outlined"
                    required="true"
                    sx={{ padding: "5px", margin: "5px" }}
                  />
                </Box>
                <Box>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Job Location"
                    defaultValue="Remote"
                    helperText="Please select job type"
                    sx={{ padding: "5px", margin: "5px" }}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="outlined-basic"
                    label="Company url"
                    variant="outlined"
                    required="true"
                    sx={{ padding: "5px", margin: "5px" }}
                  />
                </Box>
                <Box>
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Job description
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      label="Job description"
                      required="true"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <Box sx={{ display: "flex" }}>
                    <FormControl
                      required="true"
                      component="fieldset"
                      sx={{ m: 1, display: "flex" }}
                      variant="standard"
                    >
                      <FormLabel component="legend">Skills</FormLabel>
                      <Box sx={{ display: "flex", paddingLeft: "20px" }}>
                        <FormGroup
                          sx={{ display: "flex", paddingRight: "20px" }}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={mongoDB}
                                onChange={handleChange}
                                name="mongoDB"
                              />
                            }
                            label="mongoDB"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={node}
                                onChange={handleChange}
                                name="node"
                              />
                            }
                            label="NodeJs"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={full}
                                onChange={handleChange}
                                name="full"
                              />
                            }
                            label="Full Stsck Developer"
                          />
                        </FormGroup>
                        <FormGroup
                          sx={{ display: "flex", paddingLeft: "20px" }}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={reactJs}
                                onChange={handleChange}
                                name="reactJs"
                              />
                            }
                            label="reactJs"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={flutter}
                                onChange={handleChange}
                                name="flutter"
                              />
                            }
                            label="Flutter Developer"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={Native}
                                onChange={handleChange}
                                name="Native"
                              />
                            }
                            label="React Native Developer"
                          />
                        </FormGroup>
                      </Box>
                    </FormControl>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <Button
                    variant="contained"
                    onClick={handleClickOpen}
                    sx={{
                      backgroundColor: "#819cff99",
                      color: "blue",
                      fontWeight: 600,
                      ":hover": {
                        backgroundColor: "#819cff99",
                      },
                    }}
                  >
                    Post Job
                  </Button>
                </Box>
              </Box>
            </DialogContent>
          </div>
        </BootstrapDialog>
      </div>
    </>
  );
}

export default PostJobDialog;

const TermBoxStyle = styled(Box)(({ theme }) => ({
  color: "#878787",
  fontSize: 17.5,
  fontWeight: 400,
  marginTop: "18px",
  marginBottom: "8px",
  [theme.breakpoints.down("sm")]: {
    fontSize: 10.5,
    marginTop: "8px",
    marginBottom: "5px",
  },
}));

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(123, 123, 249);
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

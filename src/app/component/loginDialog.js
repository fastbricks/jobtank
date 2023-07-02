import { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Head from "next/head";
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
const accountInitialValue = {
  login: {
    view: "login",
  },
  signup: {
    view: "signup",
  },
};

function LoginDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    toggleaccount(accountInitialValue.login);
  };
  const [account, toggleaccount] = useState(accountInitialValue.login);

  const toggleSignup = () => {
    toggleaccount(accountInitialValue.signup);
  };
  const toggleSignin = () => {
    toggleaccount(accountInitialValue.login);
  };

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
          color="inherit"
          variant="outlined"
          sx={{ fontWeight: 60 }}
          onClick={handleClickOpen}
        >
          Login
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
                <Box sx={{ display: "grid", justifyContent: "center" }}>
                  <img src="/logo.png" className="nav_logo" alt="jobtank" />
                </Box>
                <Typography className="nav_logo_text">JOBTANK</Typography>
              </Box>
            </BootstrapDialogTitle>
            <DialogContent>
              {account.view === "login" ? (
                <Box>
                  <Box className="login_box" sx={{ display: "flex" }}>
                    <Card
                      sx={{
                        display: "grid",
                        margin: "5px",
                        padding: "10px",
                      }}
                    >
                      <Box className="login_Textfield_box">
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: 25,
                            color: "grey",
                            paddingLeft: "20px",
                          }}
                        >
                          Sign in
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "grid", padding: "10px 20px 20px 20px" }}
                      >
                        <TextField
                          id="outlined-basic"
                          label="Enter Phone number"
                          variant="outlined"
                          color="warning"
                        />
                        <TermBoxStyle>
                          By continuing, you agree to Jobtank &nbsp;
                          <StyledLink href={{}}>Terms of Use</StyledLink>&nbsp;
                          and&nbsp;
                          <StyledLink href={{}}>Privacy Policy</StyledLink>.
                        </TermBoxStyle>
                        <Button
                          variant="contained"
                          disableElevation
                          sx={{
                            margin: "5px 5px",
                            backgroundColor: "rgb(123, 123, 249)",
                            color: "#fff",
                            ":hover": {
                              backgroundColor: "#819cff60",
                              color: "blue",
                            },
                          }}
                        >
                          Request OTP
                        </Button>
                      </Box>
                    </Card>
                  </Box>
                  <Box
                    sx={{
                      justifyContent: "center",
                      display: "grid",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <Divider>
                      {" "}
                      <Typography sx={{ color: "grey", fontSize: 13.5 }}>
                        New to Jobtank?
                      </Typography>
                    </Divider>

                    <Card onClick={toggleSignup}>
                      <Button autoFocus>
                        <span
                          style={{
                            textTransform: "none",
                            color: "rgb(123, 123, 249)",
                          }}
                        >
                          Create Your Jobtank account
                        </span>
                      </Button>
                    </Card>
                  </Box>
                </Box>
              ) : (
                <Box>
                  <Box className="login_box" sx={{ display: "flex" }}>
                    <Card
                      sx={{
                        display: "grid",
                        margin: "5px",
                        padding: "10px",
                      }}
                    >
                      <Box className="login_Textfield_box">
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: 25,
                            color: "grey",
                            paddingLeft: "20px",
                          }}
                        >
                          Sign up
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "grid", padding: "10px 20px 20px 20px" }}
                      >
                        <TextField
                          id="outlined-basic"
                          label="Enter Phone number"
                          variant="outlined"
                          color="warning"
                        />
                        <TermBoxStyle>
                          By continuing, you agree to Jobtank &nbsp;
                          <StyledLink href={{}}>Terms of Use</StyledLink>&nbsp;
                          and&nbsp;
                          <StyledLink href={{}}>Privacy Policy</StyledLink>.
                        </TermBoxStyle>
                        <Button
                          variant="contained"
                          disableElevation
                          sx={{
                            margin: "5px 5px",
                            backgroundColor: "rgb(123, 123, 249)",
                            ":hover": {
                              backgroundColor: "#819cff60",
                              color: "blue",
                            },
                          }}
                        >
                          continue
                        </Button>
                      </Box>
                    </Card>
                  </Box>
                  <Box
                    sx={{
                      justifyContent: "center",
                      display: "grid",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <Divider>
                      <Typography sx={{ color: "grey", fontSize: 13.5 }}>
                        Existing User?
                      </Typography>
                    </Divider>
                    <Card onClick={toggleSignin}>
                      <Button
                        variant="contained"
                        disableElevation
                        sx={{
                          backgroundColor: "#fff",
                          height: "100%",
                          width: "100%",
                          color: "rgb(123, 123, 249)",
                          ":hover": {
                            backgroundColor: "#eee",
                          },
                        }}
                      >
                        sign in
                      </Button>
                    </Card>
                  </Box>
                </Box>
              )}
            </DialogContent>
          </div>
        </BootstrapDialog>
      </div>{" "}
    </>
  );
}

export default LoginDialog;

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

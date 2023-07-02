import {
  Box,
  Card,
  Typography,
  styled,
  InputBase,
  Button,
} from "@mui/material";
import React from "react";
import careerpic from "../assets/careerspic.png";
import logo from "../assets/logo.png";
import just from "../assets/justskill.png";

function Careers() {
  return (
    <Box sx={{ marginTop: "15vh" }}>
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
            backgroundImage:
              "linear-gradient(to right, rgba(171, 117, 230, 1),rgba(238, 73, 156, 1))",
            height: 600,
            width: "50%",
            elevation: 10,
          }}
        >
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginTop: 2,
            }}
          >
            <img src={careerpic} alt="" />
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
              <img src={just} alt="" style={{ width: 100 }} />
              <Box>
                <img src={logo} alt="" className="App-logo" />
              </Box>
            </BoxStyle>
          </Box>
        </Card>
        <Card
          sx={{
            marginBottom: 3,
            backgroundColor: "#E0D6F5",
            borderRadius: 5,
            height: 700,
            width: "30%",
            elevation: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
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
              We are hiring!
            </Typography>
          </Box>
          <Box
            sx={{
              marginLeft: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#000",
                fontSize: "1.3rem",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Apply now!
            </Typography>
          </Box>

          <Box
            sx={{
              margin: 3,
              marginBottom: 0.5,
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#8C52FF",
                fontSize: ".875rem",
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Full name
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InputBase
              fullWidth={false}
              sx={{
                backgroundColor: "#fff",
                color: "#8C52FF",
                borderRadius: 2,
                paddingLeft: 1,
                paddingRight: 1,
                border: 2,
                borderColor: "#fff",
                width: "90%",
                height: "2.8em",
                ":hover": { borderColor: "#8C52FF" },
              }}
            />
          </Box>
          <Box
            sx={{
              margin: 3,
              marginBottom: 0.5,
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#8C52FF",
                fontSize: ".875rem",
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Email
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InputBase
              fullWidth={false}
              sx={{
                backgroundColor: "#fff",
                color: "#8C52FF",
                borderRadius: 2,
                paddingLeft: 1,
                paddingRight: 1,
                border: 2,
                borderColor: "#fff",
                width: "90%",
                height: "2.8em",
                ":hover": { borderColor: "#8C52FF" },
              }}
            />
          </Box>
          <Box
            sx={{
              margin: 3,
              marginBottom: 0.5,
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#8C52FF",
                fontSize: ".875rem",
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Phone number
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InputBase
              fullWidth={false}
              sx={{
                backgroundColor: "#fff",
                color: "#8C52FF",
                borderRadius: 2,
                paddingLeft: 1,
                paddingRight: 1,
                border: 2,
                borderColor: "#fff",
                width: "90%",
                height: "2.8em",
                ":hover": { borderColor: "#8C52FF" },
              }}
            />
          </Box>
          <Box
            sx={{
              margin: 3,
              marginBottom: 0.5,
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#8C52FF",
                fontSize: ".875rem",
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Link to your Resume
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InputBase
              fullWidth={false}
              sx={{
                backgroundColor: "#fff",
                color: "#8C52FF",
                borderRadius: 2,
                paddingLeft: 1,
                paddingRight: 1,
                border: 2,
                borderColor: "#fff",
                width: "90%",
                height: "2.8em",
                ":hover": { borderColor: "#8C52FF" },
              }}
            />
          </Box>
          <Box
            sx={{
              margin: 3,
              marginBottom: 0.5,
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#8C52FF",
                fontSize: ".875rem",
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Skill:
            </Typography>
          </Box>
          <Box
            sx={{
              marginLeft: 4,
              marginBottom: 0.5,
            }}
          >
            <div class="relative dark:text-gray-400">
              <div
                class="grid grid-cols-2"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2,minmax(0,1fr))",
                }}
              >
                <div class="flex flex-col mt-1 ml-4">
                  <div>
                    <InputBase
                      id="default-radio-2"
                      type="radio"
                      name="skill"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      value="Content Writer"
                    />
                    <label
                      for="default-radio-2"
                      class=" ml-2 leading-7 text-sm text-gray-600 dark:text-gray-400"
                    >
                      Content Writer
                    </label>
                  </div>

                  <div>
                    <InputBase
                      id="default-radio-4"
                      type="radio"
                      name="skill"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      value="MERN Developer"
                    />
                    <label
                      for="default-radio-4"
                      class=" ml-2 leading-7 text-sm text-gray-600 dark:text-gray-400"
                    >
                      MERN Dev
                    </label>
                  </div>
                  <div>
                    <InputBase
                      id="default-radio-5"
                      type="radio"
                      name="skill"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      value="Python Developer"
                    />
                    <label
                      for="default-radio-5"
                      class=" ml-2 leading-7 text-sm text-gray-600 dark:text-gray-400"
                    >
                      Python Dev
                    </label>
                  </div>
                </div>
                <div class="flex flex-col mt-1 ml-4">
                  <div>
                    <InputBase
                      id="default-radio-6"
                      type="radio"
                      name="skill"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      value="PHP Developer"
                    />
                    <label
                      for="default-radio-6"
                      class=" ml-2 leading-7 text-sm text-gray-600 dark:text-gray-400"
                    >
                      Django Dev
                    </label>
                  </div>
                  <div>
                    <InputBase
                      id="default-radio-7"
                      type="radio"
                      name="skill"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      value="JavaScript Developer"
                    />
                    <label
                      for="default-radio-7"
                      class=" ml-2 leading-7 text-sm text-gray-600 dark:text-gray-400"
                    >
                      JavaScript Dev
                    </label>
                  </div>
                  <div>
                    <InputBase
                      id="default-radio-8"
                      type="radio"
                      name="skill"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      value="Java Developer"
                    />
                    <label
                      for="default-radio-8"
                      class=" ml-2 leading-7 text-sm text-gray-600 dark:text-gray-400"
                    >
                      Java Dev
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </Box>
          <Box
            sx={{
              margin: 3,
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                borderRadius: 2,
                padding: "8px 33px",
                pl: 5,
                backgroundColor: "#8B51FF",
                boxShadow: " 0px 4px 5px 0px rgb(255 255 255 / 14%)",
                "&:hover": {
                  backgroundColor: "#8C52FF",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              Submit
            </Button>
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
                fontSize: ".875rem",
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              WE'LL BE IN TOUCH SOON!
            </Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}

export default Careers;
//css
const BoxStyle = styled(Box)`
  display: flex;
`;

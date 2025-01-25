import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import vectorP5 from "/icon/V art.svg" //Icon

export default function Review({ name, location, profile, thoughts, link }) {
  return (
    <Box
      sx={{
        width: { xs: "102%", md: "1320px" },
        height: { xs: "585px", md: "555px" },
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
      }}
    >
       {/* Review Details */}
      <Box 
        sx={{
          width: { xs: "100%", md: "555.55px" },
          height: { xs: "336px", md: "555px" },
          bgcolor: " #FEBF00",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box sx={{ width: {xs:'80%', md:'70%'}, height: {xs:'80%', md:'70%'}, display: "flex" }}>
          <Typography
            sx={{
              fontFamily: "CotorisBold",
              fontSize: "55px",
              alignSelf: "start",
              mt: "-25px",
              ml: "-15px",
              mr: "5px",
            }}
          >
            “
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ height: "80%" }}>
              <Typography
                sx={{ fontSize: {xs:'18px', md:'20px'}, lineHeight: {xs:'28px', md:'34px'}, color: "#0A1425" }}
              >
                {thoughts}        {/* props */}
              </Typography>
            </Box>
            <Box
              sx={{
                height: "20%",
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid #0A1425",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "20px",
                    fontWeight: 500,
                    color: " #0A1425",
                    fontFamily: "Bebas Neue",
                  }}
                >
                  {name}        {/* props */}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    lineHeight: "14px",
                    fontWeight: 500,
                    color: "#333333",
                  }}
                >
                  {location}      {/* props */}
                </Typography>
              </Box>
              <Box sx={{ width: "40px", borderBottom: "4px solid #BD1F17" }}>
                <img
                  src={profile}
                  alt=""
                  style={{
                    width: "39.5px",
                    height: "39.9",
                    borderRadius: "50%",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{height:'49px', position: "absolute", bottom: {xs:'-10px', md:'85px'}, left: 0 }}>
          <img src={vectorP5} alt="" style={{height:'100%'}}/>
        </Box>
      </Box>
      {/* Review image */}
      <Box sx={{ width: { xs: "100%", md: "760px" }, height: {xs:'225px', md:'555px'} }}>
        <img src={link} alt="" style={{ width: "100%" }} />
      </Box>
    </Box>
  );
}

Review.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  thoughts: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

function Facility({ link, head, content }) {
  return (
    <Box
      sx={{
        width: { xs: "90%", md: "440px" },
        height: { xs: '70px', md: '90px' },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: '70px', md: '90px'},
          height:  { xs: '70px', md: '90px'},
          mr: "16px",
          borderRadius: "50%",
          display: "flex",
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0.05px 1px 0.05px rgba(49, 49, 49, 0.3)",
        }}
      >
        <img src={link} alt="" /> {/* icon url*/}
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "30px",
            fontFamily: "Bebas Neue",
            fontWeight: 500,
            lineHeight: "36px",
            cursor: "pointer",
          }}
        >
          {head} {/* facility name*/}
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontFamily: "roboto",
            fontWeight: 400,
            lineHeight: "32px",
            letterSpacing: "-1.5%",
          }}
        >
          {content} {/* facility description*/}
        </Typography>
      </Box>
    </Box>
  );
}
export default Facility;
Facility.propTypes = {
  head: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.string,
}
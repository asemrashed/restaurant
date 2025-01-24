import { Box, Typography } from "@mui/material";
import goldenSpoon from "/image/goldenSpoonP4.png";
import Form from "./Form";
 
function BookingForm() {
  return (
    <Box
    id="reservation"
      sx={{
        width: {xs:'100%', xl:'1920px'}, 
        height: {xs:'722px', xl:'788px'},
        backgroundImage: `url(${goldenSpoon})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: { xs: "80%", md: "1320px", display:'flex', justifyContent:{xs:'center', md:'left'} }}}>
        <Form />
      </Box>
    </Box>
  );
}

export default BookingForm;

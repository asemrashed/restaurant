import { Box, Typography } from "@mui/material";
import goldenSpoon from "/image/goldenSpoonP4.png";
import Form from "./Form";

function BookingForm() {
  return (
    <Box
      id="reservation"
      sx={{
        width: { xs: "100%", xl: "1920px" },
        height: { xs: "722px", xl: "788px" },
        backgroundImage: `url(${goldenSpoon})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "80%",
            md: "1320px",
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center", md: "left" },
            color: "#fff",
          },
        }}
      >
        <Box> {/* Booking text */}
        <Typography
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "red",
            marginBottom: { xs: "0px", md: "8px" },
            fontSize: { xs: "16px", md: "20px" },
            lineHeight: { xs: "26px", md: "32px" },
          }}
        >
          <img
            src="/icon/redRectangle.png"
            alt=""
            style={{ marginRight: "16px" }}
          />
          Book Now
        </Typography>
        <Typography
          sx={{
            fontFamily: "Bebas Neue",
            fontWeight: "500",
            marginBottom: { xs: "2px", md: "24px" },
            fontSize: { xs: "40px", md: "62px" },
            lineHeight: { xs: "48px", md: "62px" },
          }}
        >
          Book Your Table
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "24px", maxWidth: "600px", fontSize: "16px" }}
        >
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
          molestie vel, ornare non id blandit netus.
        </Typography>
        </Box>
        <Form /> {/* Booking Form component*/}
      </Box>
    </Box>
  );
}

export default BookingForm;

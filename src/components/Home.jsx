import { Box, Typography } from "@mui/material";
import orangeBG from "/image/Rectangle 4@2x.svg";
import sideViewImg from "/image/sideViewP1.png";
import linearBG from "/image/linearBG.png";
import Btn from "./Btn";

function Home() {
  return (
    <Box
      id="home"
      sx={{
        width: { xs: "100%", xl: "1920px" },
        height: { xs: "715px", xl: "939px" },
        bgcolor: "#BD1F17",
        backgroundImage: `url(${orangeBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "1320px" },
          height: "659px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: {xs:'space-between', md:'flex-start'},
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* home page text content*/}
        <Box
          sx={{
            width: { xs: "80%", md: "946px" },
            height: { xs: "293px", md: "446px" },
            position: "relative",
            zIndex: 1,
            color: "#fff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "48px", md: "120px" }, // Responsive font size
                lineHeight: { xs: "56px", md: "130px" },
                fontWeight: "500",
                fontFamily: "Bebas Neue",
                backgroundImage: `url(${linearBG})`,
              }}
            >
              Taste the authentic Saudi cuisine
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "24px" }, // Responsive font size
                lineHeight: "32px",
                fontWeight: 400,
                width: { xs: "95%", md: "559px" },
                mb: "8px",
              }}
            >
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.
            </Typography>
            <Btn
              style={{ padding: "24px 16px" }}
              value="Explore Menu"
              fWeight="700"
              lfsize="18px"
              minWidth="159px"
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "80%", md: "700px" },
            height: { md: "649px" },
            position: { xs: "static"},
            right: 0,
            top: 0,
            zIndex: 0,
          }}
        >
          {/* home page image content*/}
          <Box sx={{ position: "relative" }}>
            {/* icon */}
            <img
              src="/icon/vP1.svg"
              alt="<^>"
              style={{
                width: "45px",
                height: "45px",
                position: "absolute",
                top: "-35px",
                right: "-26px",
                zIndex: 2,
              }}
            />
            {/* main image */}
            <img
              src={sideViewImg}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {/* icon */}
            <img
              src="/icon/OfferP1.svg"
              alt="<^>"
              style={{
                width: "110px",
                height: "110px",
                position: "absolute",
                bottom: "-15px",
                right: "-45px",
                zIndex: 2,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;

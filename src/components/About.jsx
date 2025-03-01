import { Box} from "@mui/material";
import AboutNav from "./aboutNav";
import Facility from "./Facility";
//images & Icons
import imageP2 from "/image/imageP2.png";
import exp from "/icon/marketExp.svg";
import deleveryIcon from "/icon/delivery.png";
import diningIcon from "/icon/dining.png";
import pickupIcon from "/icon/pickup.png";
import sideImg from "/image/sideImgP2.png";

function About() {
  return (
    <Box
      id="about"
      sx={{
        width: { xs: "100%", xl: "1920px" },
        height: { xs: "1144px", xl: "864px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* top side About section */}
      <Box
        sx={{
          width: { xs: "80%", md: "1320px" },
          height: { xs: "756px", md: "460px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
        }}
      >
        {/* left side image */}
        <Box
          sx={{
            width: { xs: "100%", md: "617px" },
            height: { xs: "246px", md: "460px" },
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={imageP2}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              width: { xs: "129px", md: "241.17px" },
              height: { xs: "73.13px", md: "136.75px" },
              borderRadius: { xs: "10px", md: "20px" },
              position: "absolute",
              top: { xs: "15px", md: "30.25px" },
              left: { xs: "15px", md: "24px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={exp}
              alt=""
              style={{
                width: "80%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
        {/* Right side About */}
        <Box
          sx={{
            width: { xs: "100%", md: "624px" },
            height: { xs: "478px", md: "460px" },
            zIndex:1,
          }}
        >
          <AboutNav />
        </Box>
      </Box>
      {/* Bottom side facility Component */}
      <Box
        sx={{
          width: { xs: "80%", md: '1320px' },
          height: { xs: "274px", md: '90px' },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap:'20px',
          justifyContent:'space-evenly',
        }}
      >
        <Facility
          link={deleveryIcon}
          head="Fast Delevery"
          content="Within 30 minutes"
        />
        <Facility
          link={diningIcon}
          head="Absolulte Dining"
          content="Best buffer restaurant"
        />
        <Facility
          link={pickupIcon}
          head="Pickup Delevery"
          content="Grab your food order"
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: "0px",
          top: "340px",
          display: { xs: "none", md: "block" },
          zIndex:0,
        }}
      >
        <img src={sideImg} alt="" style={{}} />
      </Box>
    </Box>
  );
}

export default About;

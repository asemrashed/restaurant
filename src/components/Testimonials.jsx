import { Box, Typography } from "@mui/material";
import HeadingArrow from "./HeadingArrow";
import Review from "./Review";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  //sliding function
  const slideRef = useRef(null);
  const carousel = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
  };

  const handleNext = () => {
    slideRef.current.slickNext();
  };

  const handlePrev = () => {
    slideRef.current.slickPrev();
  };

  return (
    <Box
      id="clients"
      sx={{
        width: { xs: "100%", xl: "1920px" },
        height: { xs: "862px", xl: "965.97px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box sx={{ zIndex: 1, width:{xs:'80%',md:'1320px'},display:'flex', flexDirection:'column', alignItems:'center' }}>
        <HeadingArrow
          heading="What some of my Customers say"
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
        <Box
          sx={{
            width: { xs: "100%", md: "1320px" },
            height: { xs: "585px", md: "555px" },
            mt: {xs:'10px', md:'50px'},
          }}
        >
          <Slider {...carousel} ref={slideRef} style={{zIndex:2}}>
            <Review
              profile="/image/personP5.png"
              name="kalid al dawsry"
              location="Jedda, Saudi"
              thoughts="You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it."
              link="/image/VideoP5.png"
            />
            <Review
              profile="/image/user.png"
              name="user 5464"
              location="Dhaka, Bangladesh"
              thoughts="Shundor Zayga, Apneraw jan"
              link="/image/VideoP5.png"
            />
          </Slider>
          <Box
            sx={{
              position: "absolute",
              display: { xs: "none", md: "block" },
              left: 0,
              top: "150px",
              zIndex:0,
            }}
          >
            <img src="/public/image/veg1p5.png" alt="" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              display: { xs: "none", md: "block" },
              right: "0",
              bottom: "30px",
              zIndex: 0,
            }}
          >
            <img src="/public/image/veg2p5.png" alt="" />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100px",
            height: "40px",
            display: { xs: "flex", md: "none" },
            justifyContent: "space-between",
            mt:'5px'
          }}
        >
          <Box
            onClick={handlePrev}
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              bgcolor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "1.15px 1.15px 9px rgba(49, 49, 49, 0.2)",
            }}
          >
            <img
              src="/icon/LArrow.png"
              alt=""
              style={{ width: "8px", height: "13px" }}
            />
          </Box>
          <Box
            onClick={handleNext}
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              bgcolor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "1.15px 1.15px 9px rgba(49, 49, 49, 0.2)",
            }}
          >
            <img
              src="/icon/rArrow.png"
              alt=""
              style={{ width: "8px", height: "13px" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Testimonials;

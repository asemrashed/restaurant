import { Box, useMediaQuery } from "@mui/material";
import HeadingArrow from "./HeadingArrow";
import ManuItem from "./ManuItem";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useTheme} from "@mui/material/styles";

function Item() {
   
  const theme= useTheme();
  const isMobile= useMediaQuery(theme.breakpoints.down('md'))

   //sliding function
  const slideRef = useRef(null); 
  const carousel = {
    infinite: false,
    speed: 500, 
    slidesToShow: isMobile? 1 : 4,
    slidesToScroll:  isMobile? 1 : 4,
    autoplay: false,
    arrows: false
  };

  const handleNext = () => {
    slideRef.current.slickNext();
  };

  const handlePrev = () => {
    slideRef.current.slickPrev();
  };

  return (
    <Box id="portfolio" sx={{
      maxWidth: {xs:'100%', xl:'1920px'},
      height: {xs:'532px', xl:'710px'},
      bgcolor: '#FBF7F2',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      position: 'relative',
    }}>
      {/* Heading component with carousel control */}
      <Box sx={{ width: {xs:'80%', md:'1320px'}, height: {xs:'82px', md:'110px'}, display: 'flex' }}>
        <HeadingArrow heading="POPULAR FOOD ITEMS" handleNext={handleNext} handlePrev={handlePrev} />
      </Box>
      {/* individual ManuItem component */}
      <Box sx={{ width: {xs:'80%', md:'1320px'}, overflow: 'hidden' }}>
        <Slider {...carousel} ref={slideRef}>
          <ManuItem link='/image/classic-burger.svg' heading="Vegetables Burger" des="Barbecue Italian cuisine pizza" />
          <ManuItem link='/image/pizza 1.svg' heading="Special Pizza" des="Barbecue Italian cuisine pizza" />
          <ManuItem link='/image/french-fries.svg' heading="Special French Fries" des="Barbecue Italian cuisine" />
          <ManuItem link='/image/fried-shrimp.svg' heading="Cuisine Chicken" des="Japanese Cuisine Chicken" />
          <ManuItem link='/image/french-fries.svg' heading="Special French Fries" des="Barbecue Italian cuisine" />
          <ManuItem link='/image/classic-burger.svg' heading="Vegetables Burger" des="Barbecue Italian cuisine pizza" />
          <ManuItem link='/image/fried-shrimp.svg' heading="Cuisine Chicken" des="Japanese Cuisine Chicken" />
          <ManuItem link='/image/pizza 1.svg' heading="Special Pizza" des="Barbecue Italian cuisine pizza" />
          <ManuItem link='/image/pizza 1.svg' heading="Special Pizza" des="Barbecue Italian cuisine pizza" />
          <ManuItem link='/image/pizza 1.svg' heading="Special Pizza" des="Barbecue Italian cuisine pizza" />
        </Slider>
      </Box>
      {/* carousel control for mobile*/}
      <Box sx={{
        width:'100px',
        height:'40px',
        display:{xs:'flex', md:'none'},
        justifyContent:'space-between'
      }}>
        <Box onClick={handlePrev}
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            bgcolor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor:'pointer',
            boxShadow:'1.15px 1.15px 9px rgba(49, 49, 49, 0.2)'
          }}
        >
          <img src="/icon/LArrow.png" alt="" style={{width:'8px', height:'13px'}}/>
        </Box>
        <Box onClick={handleNext}
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            bgcolor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor:'pointer',
            boxShadow:'1.15px 1.15px 9px rgba(49, 49, 49, 0.2)'
          }}
        >
          <img src="/icon/rArrow.png" alt="" style={{width:'8px', height:'13px'}}/>
        </Box>
      </Box>
    </Box>
  );
}

export default Item;

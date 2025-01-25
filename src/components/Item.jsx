import { Box, useMediaQuery } from "@mui/material";
import HeadingArrow from "./HeadingArrow";
import ManuItem from "./ManuItem";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useTheme} from "@mui/material/styles";
// images & Icons
import item1 from "/image/classic-burger.svg";
import item2 from "/image/pizza 1.svg";
import item3 from "/image/french-fries.svg";
import item4 from "/image/fried-shrimp.svg";
import LArrow from "/icon/LArrow.png";
import RArrow from "/icon/rArrow.png";

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
          <ManuItem link={item1} heading="Vegetables Burger" des="Barbecue Italian cuisine pizza" />
          <ManuItem link={item2} heading="Special Pizza" des="Barbecue Italian cuisine pizza" />
          <ManuItem link= {item3} heading="Special French Fries" des="Barbecue Italian cuisine" />
          <ManuItem link={item4} heading="Cuisine Chicken" des="Japanese Cuisine Chicken" />
          <ManuItem link={item3} heading="Special French Fries" des="Barbecue Italian cuisine" />
          <ManuItem link={item1} heading="Vegetables Burger" des="Barbecue Italian cuisine pizza" />
          <ManuItem link={item4} heading="Cuisine Chicken" des="Japanese Cuisine Chicken" />
          <ManuItem link={item2} heading="Special Pizza" des="Barbecue Italian cuisine pizza" />
          <ManuItem link={item2} heading="Special Pizza" des="Barbecue Italian cuisine pizza" />
          <ManuItem link={item2} heading="Special Pizza" des="Barbecue Italian cuisine pizza" />
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
          <img src={LArrow} alt="" style={{width:'8px', height:'13px'}}/>
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
          <img src={RArrow} alt="" style={{width:'8px', height:'13px'}}/>
        </Box>
      </Box>
    </Box>
  );
}

export default Item;

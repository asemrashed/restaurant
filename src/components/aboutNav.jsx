import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import Btn from "./Btn";

const AboutNav = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["About", "Experience", "Contact"];
  const Heading = [
    "Exceptional culinary experience and delicious food",
    "Our Experience details...",
    "Our Contact details...",
  ];
  const content = [
    "Lorem ipsum dolor sit ametingon sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.",
    "Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.",
    "Our email details...............................................see more",
  ];

  return (
    <Box id="about">
      <Box sx={{
        borderBottom: '2px solid #B52B1D',
        width: "624px",
        height: "36px"
      }}>
        {tabs.map((tab, idx) => (
          <Button key={idx} onClick={() => setActiveTab(idx)} 
          sx={{
            fontSize: '14px', 
            lineHeight: '24px', 
            fontWeight: 500, color:'#181818',
            borderRadius:'0px',textTransform: 'capitalize',
            p:'6px 16px', marginRight:'10px',
            backgroundColor: activeTab === idx ? '#B52B1D' : 'transparent',
            color: activeTab === idx ? '#fff' : '#000',
            ':hover': {
              backgroundColor: ' #B52B1D', 
            }
          }}>
            {tab}
          </Button>
        ))}
      </Box>
      <Box sx={{ width: {xs:'98%', md:'624px'}, height: {xs:'478px', md:'402px'}, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left' }}>
        <Typography sx={{ fontSize: {xs:'40px', md:'62px'}, lineHeight:  {xs:'48px', md:'62px'}, fontWeight: 500,letterSpacing:'0px', fontFamily:'Bebas Neue'}}>
          {Heading[activeTab]}
        </Typography>
        <Typography sx={{ margin: '16px 0', fontSize:'16px', fontWeight:400, lineHeight:'24px' }}>
          {content[activeTab]}
        </Typography>
        <Box sx={{ display:'flex', gap:{xs:'15px', md:'32px'}, alignItems:'center', mt:'15px'}}>
          <Btn value="about more" width="161px" hoverBg="#B52B1D" hoverText="#fff" />
          <Typography sx={{fontSize:{xs:'14px', md:'18px'}, fontWeight:700, lineHeight:'24px'}}>
            <img src="/icon/redCall.png" alt="" style={{width:'20.5px', height:'20.5px', marginRight:'8px', marginBottom:'-2px'}}/>
            +88 3426 739 485
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutNav;

import { Box, Typography } from "@mui/material";

function HeadingArrow({ heading, handleNext, handlePrev }) {
  return (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        color:"#181818"
    }}>
      <Box
        sx={{width:{xs:'100%', md:'1165px'}, display: "flex", flexDirection:"column"}}
      >
        <Typography
          sx={{
            fontSize: {xs:'16px', md:'20px'},
            lineHeight: {xs:'26px', md:'32px'},
            color: "#BD1F17",
            fontWeight: 600,
          }}
        >
          <img src="/public/icon/redRectangle.png" alt="" style={{marginRight:'10px'}}/>
          Crispy, Every Bite Taste
        </Typography>
        <Typography
          sx={{
            fontSize: {xs:'40px', md:'62px'},
            lineHeight: {xs:'48px', md:'62px'},
            fontWeight: 600,
            fontFamily: "Bebas Neue",
            mt:{xs:'5px', md:'15px'}
          }}
        >
          {heading}
        </Typography>
      </Box>
      <Box sx={{
        width:'152px',
        height:'60px',
        display:{xs:'none', md:'flex'},
        justifyContent:'space-between'
      }}>
        <Box onClick={handlePrev}
          sx={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            bgcolor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor:'pointer',
            boxShadow:'1.15px 1.15px 9px rgba(49, 49, 49, 0.2)'
          }}
        >
          <img src="/icon/LArrow.png" alt="" style={{width:'10.71px', height:'18.70px'}}/>
        </Box>
        <Box onClick={handleNext}
          sx={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            bgcolor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor:'pointer',
            boxShadow:'1.15px 1.15px 9px rgba(49, 49, 49, 0.2)'
          }}
        >
          <img src="/icon/rArrow.png" alt="" style={{width:'10.71px', height:'18.70px'}}/>
        </Box>
      </Box>
    </Box>
  );
}

export default HeadingArrow;

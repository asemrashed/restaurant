import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

function ManuItem({
    link, heading, des
}){
    return (
        <Box sx={{
            width: {xs:'330px', md:'306px'},
            height:'300px',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'space-evenly',
            bgcolor:'#FFFFFF',
            borderRadius:"4px",
            cursor:"pointer",
            margin:{xs:'5px', md:'none'},
            ':hover':{scale:1.05, transition:'0.2s'}
        }}>
            <Box>
                <img src={link} alt="" />
            </Box>
            <Box sx={{width:'57px', border:'2px solid #BD1F17'}}></Box>
            <Typography sx={{
                fontSize:"24px", lineHeight:'36px', textAlign:'center',
                fontFamily:"Bebas Neue",fontWeight:'600', width:'306px',
            }}>{heading}</Typography>
            <Typography sx={{
                fontSize:"16px", lineHeight:'32px', letterSpacing:'-1.5%',
                fontFamily:"roboto",fontWeight:'400', textAlign:'center'
            }}>{des}</Typography>
        </Box>
    )
}
export default ManuItem;

ManuItem.propTypes = {
    link:PropTypes.string.isRequired,
    heading:PropTypes.string.isRequired,
    des:PropTypes.string.isRequired
}
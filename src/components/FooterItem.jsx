import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

export default function FooterItem({iconUrl, head, dtls1, dtls2}){
    return (
        <Box sx={{
            display: 'flex', 
            flexDirection:'column', 
            alignItems:'center', 
            color:"#fff", 
            justifyContent: 'center',
            width:'312px', height:{xs:'136px', md:'144px'},
            gap:{xs:'15px', md:'24px'}
            }}>
            <img src={iconUrl} alt="" />
            <Typography sx={{
                fontSize:'24px',
                lineHeight:'28px',
                fontwaight:'500',
                fontFamily:'Bebas Neue',
                letterSpacing: '1.5px'
            }}>
                {head}
            </Typography>
            <Typography sx={{
                fontSize:'16px',
                lineHeight:'25px',
            }}>
                {dtls1} <br />
                {dtls2}
            </Typography>
        </Box>
    )
}
FooterItem.propTypes = {
    iconUrl:PropTypes.string.isRequired,
    head:PropTypes.string.isRequired,
    dtls1:PropTypes.string.isRequired,
    dtls2:PropTypes.string.isRequired,
}
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material"; 

export default function Link({ link, iconUrl }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        width: { xs: '36px', md: '53.5px' },
        height: { xs: '36px', md: '53.5px' },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: '2px solid #fff',
        borderRadius: '50%'
      }}
    >
      <a href={link}>
        <img src={iconUrl} alt="" style={{ width: isMobile ? '12px' : '18px' }} />
      </a>
    </Box>
  );
}

Link.propTypes = {
  link: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired
}
import { Box, Typography } from "@mui/material";
import restaurentImg from "/image/restaurant-interior.png";
import FooterItem from "./FooterItem";
import Link from "./Link";
// Icons
import fb from "/icon/fb.png";
import x from "/icon/x.png";
import linkdin from "/icon/linkdin.png";
import insta from "/icon/insta.png";
import location from "/icon/location.png";
import mail from "/icon/mail.png";
import call from "/icon/call.png";
import opening from "/icon/oppening.png";

function Footer() {
  return (
    <Box
      id="findUs" 
      sx={{
        width: { xs: "100%", xl: "1920px" },
        height: { xs: "999px", xl: "719.45px" },
        backgroundImage: `url(${restaurentImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          bgcolor: " #000000CC",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* container */}
        <Box
          sx={{
            width: { xs: "80%", sm: "1320px" },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: 'space-evenly',
            alignItems: "center",
          }}
        >
          <Box>
            {/* heading */}
            <Typography
              sx={{
                fontSize: { xs: "40px", md: "62px" },
                lineHeight: {xs:'48px', md:'64px'},
                fontFamily: "Bebas Neue",
                color: "#FFFFFF",
              }}
            >
              We ready to have you the best dining experiences
            </Typography>
            {/* footer Item components */}
            <Box
              sx={{
                display: "flex",
                flexDirection: {xs:'column', md:'row'},
                alignItems: "center",
                justifyContent: "center",
                gap: "35px",
                mt: {xs:'24px', md:'72px'},
              }}
            >
              <FooterItem
                iconUrl={opening} //data transfar
                head="opening hours"
                dtls1="Monday - Sunday"
                dtls2="9:00 AM to 11:30 PM"
              />
              <FooterItem
                iconUrl={call}
                head="lat's talk"
                dtls1="Phone: 1-800-222-4545"
                dtls2="Fax: 1-800-222-4545"
              />
              <FooterItem
                iconUrl={mail}
                head="Book a table"
                dtls1="Email: demo@website.com"
                dtls2="Support: support@website.com"
              />
              <FooterItem
                iconUrl={location}
                head="our address"
                dtls1="123 Stree New York City , United"
                dtls2="States Of America"
              />
            </Box>
          </Box>
          <Box>
            {/* social media links components*/}
            <Box sx={{ display: "flex", gap: "24px" }}>
              <Link iconUrl= {fb} link="#" />
              <Link iconUrl= {x} link="#" />
              <Link iconUrl={insta} link="#" />
              <Link iconUrl={linkdin} link="#" />
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "21px" },
                lineHeight: "23.5px",
                color: "#fff",
                mt: {xs:'10px', md:'24px'},
                letterSpacing: "1px",
              }}
            >
              © 2023 All Rights Reserved
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;

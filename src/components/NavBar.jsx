import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  useMediaQuery,
  ListItemButton,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "@mui/material/styles";
//imges & icons
import orangeBG from "/image/Rectangle 4@2x.svg";
import logo from "/logo/logo.png";
import restaurant from "/image/Restaurant.svg";
import cross from "/icon/cross-svgrepo-com.svg";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Portfolio", to: "portfolio" },
    { label: "Reservation", to: "reservation" },
    { label: "Clients", to: "clients" },
    { label: "Find us", to: "findUs" },
  ];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        width: { xs: "100%", xl: "1920px" },
        height: { xs: "77px", xl: "108px" },
        backgroundColor: "#BD1F17",
        boxShadow: "none",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${orangeBG})`,
      }}
    >
      <Toolbar
        sx={{
          width: { xs: "80%", md: "1320px" },
          display: "flex",
          justifyContent: { xs: "space-between", md: "flex-start" },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "202px",
            height: "37px",
            marginRight: { md: "40px" },
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "37px",
              height: "37px",
              border: "3px solid #FEBF00",
              borderRadius: "50%",
            }}
          />
          <img
            src={restaurant}
            alt="Restaurant Logo"
            style={{
              cursor: "pointer",
              width: "159px",
              height: "29px",
              marginLeft: "6px",
            }}
          />
        </Box>

        {isMobile ? (
          // Mobile View with Drawer
          <Box sx={{ display: "flex", justifyContent: "end", flexGrow: 1 }}>
            <IconButton
              color="inherit"
              onClick={toggleDrawer(true)}
              sx={{ color: "#FFF" }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{
                  width: "100dvw",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                  backgroundColor: "#BD1F17",
                  color: "#FFF",
                }}
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <Button onClick={toggleDrawer(false)}>
                  <img
                    src={cross}
                    alt=""
                    style={{ width: "30px", color: "white" }}
                  />
                </Button>
                <List sx={{ height: "80%" }}>
                  {menuItems.map((item) => (
                    <ListItem
                      key={item.label}
                      sx={{
                        justifyContent: "center",
                        borderBottom: "2px solid",
                      }}
                    >
                      <ListItemButton sx={{display:'flex', justifyContent:'center'}}>
                        <ScrollLink
                          onClick={toggleDrawer(false)}
                          to={item.to}
                          smooth={true}
                          duration={500}
                          spy={true}
                          offset={-70}
                          style={{
                            textDecoration: "none",
                            color: "#FFF",
                            fontSize: "27px",
                            fontFamily: "Bebas Neue",
                            letterSpacing: "3px",
                          }}
                        >
                          {item.label}
                        </ScrollLink>
                      </ListItemButton>
                    </ListItem>
                  ))}

                  {/* Drawer Button */}
                  <ListItem
                    sx={{marginTop: "10px" }}
                  >
                    <ListItemButton sx={{display:'flex', justifyContent:'center'}}>
                      <Button
                        color="inherit"
                        onClick={toggleDrawer(false)}
                        component={ScrollLink}
                        to="reservation"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-70}
                        sx={{
                          bgcolor: "#FEBF00",
                          color: "#000",
                          fontWeight: "bold",
                          ":hover": {
                            bgcolor: "#FFF",
                            color: "#BD1F17",
                          },
                        }}
                      >
                        Book a Table
                      </Button>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </Box>
        ) : (
          // Desktop View with Inline Menu
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexGrow: 0,
                gap: 2,
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  component={ScrollLink}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: { xs: "12px", md: "15px" },
                    fontFamily: "Raleway",
                    ":hover": { scale: 1.1, transition: "0.23s" },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Button on the Right */}
            <Box sx={{ marginLeft: "auto" }}>
              <Button
                color="inherit"
                component={ScrollLink}
                to="reservation"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                sx={{
                  bgcolor: "#FEBF00",
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: { xs: "15px", md: "17px" },
                  ":hover": {
                    bgcolor: "#FFF",
                    color: "#BD1F17",
                  },
                }}
              >
                Book a Table
              </Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

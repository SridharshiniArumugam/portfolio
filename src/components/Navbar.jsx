import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Skills", path: "/skills" },
    { title: "Timeline", path: "/timeline" },
    { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/contact" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Frontend Engineer - ReactJS
      </Typography>
      <List>
        {navLinks.map((item) => (
          <ListItem button key={item.title} component={Link} to={item.path}>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" 
      sx={{ backgroundColor: "#fff", color: "rgb(27, 26, 26)" }}>
        <Toolbar>
          {/* Logo */}
          <Typography variant="h6" sx={{ flexGrow: 1 , fontWeight: "bold" }}>
            Frontend Engineer - ReactJS
          </Typography>

          {/* Desktop Links */}
          <Box 
          sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",   // ✅ center horizontally
              flexGrow: 1,                 // ✅ push links to center
              gap: 3                       // ✅ spacing between items
              }}
          >
            {navLinks.map((item) => (
              <Button
                key={item.title}
                component={Link}
                to={item.path}
                sx={{ color: "rgb(27, 26, 26)", fontWeight: "bold" }}
              >
                {item.title}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

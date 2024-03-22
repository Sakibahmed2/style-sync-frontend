"use client";

import MenuIcon from "@mui/icons-material/Menu";
import { Container, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export default function ResponsiveNavbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Typography variant="h4" component={Link} href={"/"} fontWeight={600}>
          Style{" "}
          <Box component="span" color="primary.main">
            sync
          </Box>
        </Typography>
      </Typography>
      <Divider />
      <List>
        <Stack gap={2}>
          <Typography
            component={Link}
            href="/"
            sx={{
              borderBottom: "2px solid white",
              borderRadius: "3px",
              px: "10px",
              "&:hover": {
                px: "10px",
                borderBottom: "2px solid gray",
                borderRadius: "3px",
                cursor: "pointer",
                transition: "all 0.5s",
              },
            }}
          >
            Home
          </Typography>
          <Typography
            component={Link}
            href="/flash-sale"
            sx={{
              borderBottom: "2px solid white",
              borderRadius: "3px",
              px: "10px",
              "&:hover": {
                px: "10px",
                borderBottom: "2px solid gray",
                borderRadius: "3px",
                cursor: "pointer",
                transition: "all 0.5s",
              },
            }}
          >
            Flash Sale
          </Typography>
          <Typography
            component={Link}
            href="/products"
            sx={{
              borderBottom: "2px solid white",
              borderRadius: "3px",
              px: "10px",
              "&:hover": {
                px: "10px",
                borderBottom: "2px solid gray",
                borderRadius: "3px",
                cursor: "pointer",
                transition: "all 0.5s",
              },
            }}
          >
            Products
          </Typography>
          <Typography
            component={Link}
            href="/"
            sx={{
              borderBottom: "2px solid white",
              borderRadius: "3px",
              px: "10px",
              "&:hover": {
                px: "10px",
                borderBottom: "2px solid gray",
                borderRadius: "3px",
                cursor: "pointer",
                transition: "all 0.5s",
              },
            }}
          >
            Category
          </Typography>
        </Stack>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            bgcolor: "white",
          }}
        >
          <Container>
            <Toolbar>
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                variant="h4"
                component={Link}
                href={"/"}
                fontWeight={600}
                color={"black"}
              >
                Style{" "}
                <Box component="span" color="primary.main">
                  sync
                </Box>
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Stack direction={"row"} gap={2}>
                  <Typography
                    component={Link}
                    href="/"
                    sx={{
                      borderBottom: "2px solid white",
                      borderRadius: "3px",
                      px: "10px",
                      "&:hover": {
                        px: "10px",
                        borderBottom: "2px solid gray",
                        borderRadius: "3px",
                        cursor: "pointer",
                        transition: "all 0.5s",
                      },
                    }}
                  >
                    Home
                  </Typography>
                  <Typography
                    component={Link}
                    href="/flash-sale"
                    sx={{
                      borderBottom: "2px solid white",
                      borderRadius: "3px",
                      px: "10px",
                      "&:hover": {
                        px: "10px",
                        borderBottom: "2px solid gray",
                        borderRadius: "3px",
                        cursor: "pointer",
                        transition: "all 0.5s",
                      },
                    }}
                  >
                    Flash Sale
                  </Typography>
                  <Typography
                    component={Link}
                    href="/products"
                    sx={{
                      borderBottom: "2px solid white",
                      borderRadius: "3px",
                      px: "10px",
                      "&:hover": {
                        px: "10px",
                        borderBottom: "2px solid gray",
                        borderRadius: "3px",
                        cursor: "pointer",
                        transition: "all 0.5s",
                      },
                    }}
                  >
                    Products
                  </Typography>
                  <Typography
                    component={Link}
                    href="/"
                    sx={{
                      borderBottom: "2px solid white",
                      borderRadius: "3px",
                      px: "10px",
                      "&:hover": {
                        px: "10px",
                        borderBottom: "2px solid gray",
                        borderRadius: "3px",
                        cursor: "pointer",
                        transition: "all 0.5s",
                      },
                    }}
                  >
                    Category
                  </Typography>
                </Stack>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </Container>
  );
}

import { useState } from "react";
import {
  styled,
  AppBar,
  Toolbar,
  Typography,
  Button,
  MenuList,
  Menu,
  Stack,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from "@mui/material";
import MobileDrawer from "./MobileDrawer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  elevation: 0,
}));

const StyledMenu = styled(Menu)`
  & > :nth-of-type(3) {
    border-radius: 10px;
  }
`;

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: "0.9rem",
  color: theme.palette.neutral.main,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  fontSize: "12px",
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

export const Navbar = () => {
  const [anchorElFeatured, setAnchorElFeatured] = useState(null);

  const openFeatured = Boolean(anchorElFeatured);
  const handleClosedFeatured = () => {
    setAnchorElFeatured(null);
  };

  const handleOpenFeatured = (e) => {
    setAnchorElFeatured(e.currentTarget);
  };

  const [anchorElCompany, setAnchorCompany] = useState(null);
  const openCompany = Boolean(anchorElCompany);

  const handleCloseCompany = () => {
    setAnchorCompany(null);
  };

  const handleOpenCompany = (e) => {
    setAnchorCompany(e.currentTarget);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "primary.main", boxShadow: 0 }}
    >
      <StyledToolbar>
        <Stack direction="row" spacing={4}>
          <Typography
            sx={{ fontWeight: "700" }}
            variant="h6"
            component="h1"
            color="secondary"
          >
            snap
          </Typography>
          <Stack
            sx={{ display: { xs: "none", sm: "flex" } }}
            direction="row"
            spacing={1}
          >
            {openFeatured ? (
              <StyledButton
                endIcon={<KeyboardArrowUpIcon color="inherit" />}
                variant="text"
                color="neutral"
                onClick={handleOpenFeatured}
              >
                Features
              </StyledButton>
            ) : (
              <StyledButton
                endIcon={<KeyboardArrowDownIcon color="inherit" />}
                variant="text"
                color="neutral"
                disableRipple
                disableFocusRipple
                disableElevation
                onClick={handleOpenFeatured}
              >
                Features
              </StyledButton>
            )}

            {openCompany ? (
              <StyledButton
                endIcon={<KeyboardArrowUpIcon color="inherit" />}
                variant="text"
                color="neutral"
                onClick={handleOpenCompany}
              >
                Company
              </StyledButton>
            ) : (
              <StyledButton
                endIcon={<KeyboardArrowDownIcon color="inherit" />}
                variant="text"
                color="neutral"
                onClick={handleOpenCompany}
              >
                Company
              </StyledButton>
            )}

            <StyledButton variant="text" color="neutral">
              Careers
            </StyledButton>
            <StyledButton variant="text" color="neutral">
              About
            </StyledButton>
            <StyledMenu
              id="feature-menu"
              sx={{ display: { xs: "none", sm: "flex" } }}
              anchorEl={anchorElFeatured}
              open={openFeatured}
              anchorOrigin={{ vertical: 50, horizontal: -65 }}
              onClose={handleClosedFeatured}
            >
              <StyledMenuItem>
                <ListItemIcon>
                  <svg
                    width="14"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1Zm-2 3H2v1h10V6Zm0 3H2v1h10V9Zm0 3H2v1h10v-1Z"
                      fill="#726CEE"
                    />
                  </svg>
                </ListItemIcon>
                Todo list
              </StyledMenuItem>
              <StyledMenuItem>
                {" "}
                <ListItemIcon>
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.667 8.667h-4v4h4v-4ZM11.334 0v1.333H4.667V0h-2v1.333h-1C.75 1.333 0 2.083 0 3v11.333C0 15.25.75 16 1.667 16h12.667C15.25 16 16 15.25 16 14.333V3c0-.917-.75-1.667-1.666-1.667h-1V0h-2Zm3 14.333H1.667V5.5h12.667v8.833Z"
                      fill="#4BB1DA"
                    />
                  </svg>
                </ListItemIcon>
                Calendar
              </StyledMenuItem>
              <StyledMenuItem>
                {" "}
                <ListItemIcon>
                  <svg
                    width="13"
                    height="17"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.408 13.916c-3.313 0-6-1.343-6-3 0-.612.371-1.18 1-1.654V7.916a5 5 0 0 1 3.041-4.6 2 2 0 0 1 3.507-1.664 2 2 0 0 1 .411 1.664 5.002 5.002 0 0 1 3.041 4.6v1.346c.629.474 1 1.042 1 1.654 0 1.657-2.687 3-6 3Zm0 1c.694 0 1.352-.066 1.984-.16.004.054.016.105.016.16a2 2 0 0 1-4 0c0-.055.012-.106.016-.16.633.094 1.29.16 1.984.16Z"
                      fill="#EDD556"
                    />
                  </svg>
                </ListItemIcon>
                Reminders
              </StyledMenuItem>
              <StyledMenuItem>
                {" "}
                <ListItemIcon>
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 2.133a5.867 5.867 0 1 0 0 11.734A5.867 5.867 0 0 0 8 2.133ZM8 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm-.533 2.667a.533.533 0 0 0-.534.533v2.133c0 .295.24.534.534.534h3.2a.533.533 0 0 0 0-1.067H8V6.4a.533.533 0 0 0-.533-.533Z"
                      fill="#8E4CB6"
                    />
                  </svg>
                </ListItemIcon>
                Planing
              </StyledMenuItem>
            </StyledMenu>
            <StyledMenu
              sx={{ display: { xs: "none", sm: "flex" } }}
              anchorEl={anchorElCompany}
              open={openCompany}
              onClose={handleCloseCompany}
              anchorOrigin={{ vertical: 50, horizontal: 0 }}
            >
              <StyledMenuItem>History</StyledMenuItem>
              <StyledMenuItem>Our Team</StyledMenuItem>
              <StyledMenuItem>Blog</StyledMenuItem>
            </StyledMenu>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <StyledButton variant="text" color="neutral">
            Login
          </StyledButton>
          <StyledButton
            sx={{ borderRadius: "10px", borderColor: "secondary.main" }}
            variant="outlined"
            color="neutral"
          >
            Register
          </StyledButton>
        </Stack>
        <MobileDrawer />
      </StyledToolbar>
    </AppBar>
  );
};

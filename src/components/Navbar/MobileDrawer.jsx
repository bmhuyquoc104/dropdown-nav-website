import { useState } from "react";
import {
  styled,
  Drawer,
  Button,
  Stack,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.neutral.main,
  fontSize: theme.typography.fontSize,
  variant: "text",
  textTransform: "capitalize",
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.neutral.main,
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  color: theme.palette.neutral.main,
  fontSize: theme.typography.fontSize,
  textTransform: "capitalize",
  fontFamily: theme.typography.fontFamily,
  fontWeight: 500,
  "&:hover": {
    color: theme.palette.secondary.main,
  },
  boxShadow: "revert",
  "&:nth-of-type(2)": {},
}));

const StyledAccordionSummary = styled(AccordionSummary)`
  justify-content: flex-start;
  gap: 0.5em;
  padding: 0 8px;
  & .MuiAccordionSummary-content {
    flex-grow: 0;
  }
`;

const MobileDrawer = () => {
  const [isOpen, setOpen] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const [isExpandedCompany, setExpandedCompany] = useState(false);

  
  return (
    <Stack sx={{ display: { xs: "flex", sm: "none" } }}>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={{ display: { xs: "flex", sm: "none" } }}
        onClose={() => setOpen(false)}
        anchor="right"
        open={isOpen}
      >
        <Stack p={2} spacing={1} alignItems="flex-start" width="60vw">
          <IconButton
            sx={{ alignSelf: "flex-end" }}
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </IconButton>
          <StyledAccordion
            expanded={isExpanded}
            component="h2"
            onChange={
              () => setExpanded(false)
            }
          >
            <StyledAccordionSummary onClick = {() => setExpanded(!isExpanded)}
              expandIcon={<KeyboardArrowDownIcon  sx={{ fontSize: "1.3rem" }} />}
            >
              Features
            </StyledAccordionSummary>
            <AccordionDetails>
              <Stack spacing={2}>
                <Stack
                  sx={{ padding: "0 2em" }}
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <svg
                    width="14"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1Zm-2 3H2v1h10V6Zm0 3H2v1h10V9Zm0 3H2v1h10v-1Z"
                      fill="#726CEE"
                    />
                  </svg>
                  <StyledTypography
                    sx={{ fontSize: "1.125rem" }}
                    variant="h6"
                    component="h3"
                  >
                    Todo List
                  </StyledTypography>
                </Stack>
                <Stack
                  sx={{ padding: "0 2em" }}
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <svg
                    width="16"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.667 8.667h-4v4h4v-4ZM11.334 0v1.333H4.667V0h-2v1.333h-1C.75 1.333 0 2.083 0 3v11.333C0 15.25.75 16 1.667 16h12.667C15.25 16 16 15.25 16 14.333V3c0-.917-.75-1.667-1.666-1.667h-1V0h-2Zm3 14.333H1.667V5.5h12.667v8.833Z"
                      fill="#4BB1DA"
                    />
                  </svg>
                  <StyledTypography
                    sx={{ fontSize: "1.125rem" }}
                    variant="h6"
                    component="h3"
                  >
                    Calendar
                  </StyledTypography>
                </Stack>
                <Stack
                  sx={{ padding: "0 2em" }}
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <svg
                    width="13"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.408 13.916c-3.313 0-6-1.343-6-3 0-.612.371-1.18 1-1.654V7.916a5 5 0 0 1 3.041-4.6 2 2 0 0 1 3.507-1.664 2 2 0 0 1 .411 1.664 5.002 5.002 0 0 1 3.041 4.6v1.346c.629.474 1 1.042 1 1.654 0 1.657-2.687 3-6 3Zm0 1c.694 0 1.352-.066 1.984-.16.004.054.016.105.016.16a2 2 0 0 1-4 0c0-.055.012-.106.016-.16.633.094 1.29.16 1.984.16Z"
                      fill="#EDD556"
                    />
                  </svg>
                  <StyledTypography
                    sx={{ fontSize: "1.125rem" }}
                    variant="h6"
                    component="h3"
                  >
                    Reminders
                  </StyledTypography>
                </Stack>
                <Stack
                  sx={{ padding: "0 2em" }}
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <svg
                    width="16"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 2.133a5.867 5.867 0 1 0 0 11.734A5.867 5.867 0 0 0 8 2.133ZM8 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm-.533 2.667a.533.533 0 0 0-.534.533v2.133c0 .295.24.534.534.534h3.2a.533.533 0 0 0 0-1.067H8V6.4a.533.533 0 0 0-.533-.533Z"
                      fill="#8E4CB6"
                    />
                  </svg>
                  <StyledTypography
                    sx={{ fontSize: "1.125rem" }}
                    variant="h6"
                    component="h3"
                  >
                    Planning
                  </StyledTypography>
                </Stack>
              </Stack>
            </AccordionDetails>
          </StyledAccordion>
          <StyledAccordion
            expanded={isExpandedCompany}
            onChange={() => setExpandedCompany(false)
            }
          >
            <StyledAccordionSummary onClick={() => setExpandedCompany(!isExpandedCompany)}
              expandIcon={<KeyboardArrowDownIcon sx={{ fontSize: "1.3rem" }} />}
            >
              Company
            </StyledAccordionSummary>
            <AccordionDetails>
              <Stack spacing={2} sx={{ padding: "0 2em" }}>
                <StyledTypography
                  sx={{ fontSize: "1.125rem" }}
                  variant="h6"
                  component="h3"
                >
                  History
                </StyledTypography>
                <StyledTypography
                  sx={{ fontSize: "1.125rem" }}
                  variant="h6"
                  component="h3"
                >
                  Our Team
                </StyledTypography>
                <StyledTypography
                  sx={{ fontSize: "1.125rem" }}
                  variant="h6"
                  component="h3"
                >
                  Blog
                </StyledTypography>
              </Stack>
            </AccordionDetails>
          </StyledAccordion>
          <StyledButton>Careers</StyledButton>
          <StyledButton>About</StyledButton>
        </Stack>
      </Drawer>
    </Stack>
  );
};

export default MobileDrawer;

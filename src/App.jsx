import { Navbar } from "./components/Navbar/Navbar";
import Section from "./components/Main/Section";
import { Stack } from "@mui/material";
import { GlobalStyled } from "./components/GlobalStyled";
import { ThemeProvider,Typography } from "@mui/material";
import { theme } from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack width="100%"  alignItems = "center"  height = "100vh">
        <Navbar />
        <Section/>
      </Stack>
    </ThemeProvider>
  );
}

export default App;

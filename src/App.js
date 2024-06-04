import Header from "./components/Header";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Main from "./components/Main";
import React from "react";
const customTypography = {
  fontFamily: "unset",
};
const theme = createTheme({
  typography: customTypography,
});

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(
    localStorage.getItem("dark-mode") === "true"
  );

  return (
    <ThemeProvider theme={theme}>
      <>
        <Box
          sx={{
            background: isDarkMode ? "black" : "white",
            width: "100%",
            minHeight: "100vh",
            height: "100%",
            overflowX: "hidden",
          }}
        >
          {/* Header Component */}
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Main isDarkMode={isDarkMode} />
        </Box>
      </>
    </ThemeProvider>
  );
}

export default App;

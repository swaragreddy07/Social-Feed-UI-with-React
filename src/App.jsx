import Sidebar from "./components/Sidebar";
import RightBar from "./components/RightBar";
import NavBar from "./components/NavBar";
import Feed from "./components/Feed";
import { Stack, ThemeProvider, createTheme, Box } from "@mui/material";
import AddPost from "./components/AddPost";
import "./App.css";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "space-between" }}
        >
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <RightBar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;

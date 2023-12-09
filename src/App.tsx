
import { ThemeProvider } from "@mui/material";
import Feeds from "./components/feed";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
       <Feeds owner="You" contactName="Milton Romaguera" />
    </ThemeProvider>
  );
}

export default App;

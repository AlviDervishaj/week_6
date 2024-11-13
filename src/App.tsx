import { CssBaseline } from "@mui/material";
import AppTheme from "./components/shared_theme/AppTheme";
import { Form } from "./components/ui/Form";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

function App() {

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <ThemeSwitcher />
      <Form />
    </AppTheme>
  )
}


export default App

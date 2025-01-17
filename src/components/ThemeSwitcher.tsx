import { useColorScheme } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
export const ThemeSwitcher = () => {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Select
      value={mode}
      onChange={(event) =>
        setMode(event.target.value as 'system' | 'light' | 'dark')
      }
      sx={{ position: 'fixed', top: '1rem', right: '1rem' }}
    >
      <MenuItem value="system">System</MenuItem>
      <MenuItem value="light">Light</MenuItem>
      <MenuItem value="dark">Dark</MenuItem>
    </Select>
  );
}


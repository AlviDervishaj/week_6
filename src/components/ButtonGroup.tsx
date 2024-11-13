import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { Button } from "./ui/Button";
import { FacebookIcon, GoogleIcon } from "./sign_up/CustomIcons";

export const SignUpButtonGroup = () => {
  return (
    <FormControl sx={{ width: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, justifyItems: "space-evenly" }}>
        <Button
          onClick={() => alert('Sign up with Google')}
          startIcon={<GoogleIcon />}
        >
          Sign up with Google
        </Button>
        <Button
          onClick={() => alert('Sign up with Facebook')}
          startIcon={<FacebookIcon />}
        >
          Sign up with Facebook
        </Button>
      </Box>
    </FormControl>
  )
}

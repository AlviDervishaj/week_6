import MUIButton, {ButtonProps} from "@mui/material/Button";

export const Button = (props: ButtonProps) => {
  return (
    <MUIButton
      fullWidth
      variant="outlined"
      {...props}
    />
  );
}


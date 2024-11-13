import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import MUIInput from "@mui/material/Input";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import { InputProps } from "@mui/material/Input";
import { forwardRef, ReactNode } from "react";

type ExtendedInputProps = {
  children: ReactNode,
  _error?: string,
  isGrouped?: boolean,
  helperText?: string
} & InputProps

export const Input = forwardRef<HTMLInputElement, ExtendedInputProps>(
  (props: ExtendedInputProps, ref) => {
    const { children, _error, isGrouped, helperText, ...otherProps } = props;
    return (
      <FormControl sx={{ width: isGrouped ? "90%" : 1, marginX: "auto", paddingY: "0.7rem", display: "flex", flexDirection: "column", gap: "0.3rem" }} error={_error && _error !== "" ? true : false}>
        <FormLabel htmlFor={props.name}>{children}</FormLabel>
        <MUIInput
          required
          fullWidth
          {...otherProps}
          ref={ref}
        />
        {helperText && helperText.trim() !== "" ? <FormHelperText>{helperText}</FormHelperText> : null}
        <FormHelperText sx={{ display: "flex", gap: "1rem", justifyItems: "center", alignContent: "center", alignItems: "center" }}>
          {_error && _error !== "" ?
            <>
              <InfoOutlined />
              {/* <Typography variant="body1" sx={{ letterSpacing: "0.2ch", fontWeight: "bold" }}>{_error}</Typography> */}
              {_error}
            </>
            : null}
        </FormHelperText>
      </FormControl>
    )
  }
)

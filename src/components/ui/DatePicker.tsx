import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { Control, Controller } from "react-hook-form";
import { Dayjs } from "dayjs";
import { InputTypes } from '../../types/Input';
import FormHelperText from '@mui/material/FormHelperText';
import InfoOutlined from '@mui/icons-material/InfoOutlined';

export const CustomDatePicker = (props: DatePickerProps<Dayjs> & { control: Control<InputTypes>, error: string }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        {...props}
        name="birthday"
        defaultValue={""}
        rules={{ required: "Date can not be empty !" }}
        render={({ field }) => (
          <DatePicker
            {...field}
            label={props.label}
            disableFuture={true}
            value={null}
            onChange={(newValue) => field.onChange(newValue)}
          />
        )}
      />
      <FormHelperText sx={{ display: "flex", gap: "1rem", justifyItems: "center", alignContent: "center", alignItems: "center" }}>
        {props.error && props.error !== "" ?
          <>
            <InfoOutlined />
            {/* <Typography variant="body1" sx={{ letterSpacing: "0.2ch", fontWeight: "bold" }}>{props.error}</Typography> */}
            {props.error}
          </>
          : null}
      </FormHelperText>
    </LocalizationProvider>
  )
}

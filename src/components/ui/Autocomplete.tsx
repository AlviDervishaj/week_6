import { Control, Controller } from 'react-hook-form';
import { InputTypes } from '../../types/Input';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const places = [{ label: "Italy" }, { label: "Albania" }, { label: "Germany" }, { label: "France" }];

type ControllerProps = {
  control: Control<InputTypes>;
}

export const ControlledAutocomplete = ({ control }: ControllerProps) => {
  return (
    <Controller
      name="place"
      control={control}
      render={({ field }) => (
        <Autocomplete
          options={places}
          id="place"
          renderInput={(params) => <TextField {...params} label="Places" />}
          {...field}
          value={field.value || null}
          onChange={(_, data) => {
            console.log({ data });
            field.onChange(data?.label);
          }}
        />
      )}
    />
  );
}

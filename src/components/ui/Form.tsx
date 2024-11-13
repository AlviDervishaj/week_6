import { useEffect } from "react";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox/Checkbox";

import { SubmitHandler, useForm } from "react-hook-form";
import { AlreadyHaveAccount } from "../AlreadyHaveAccount";
import { SignUpButtonGroup } from "../ButtonGroup";
import { StackContainer } from "./mui/Stack";
import { CustomDatePicker } from "./DatePicker";
import { InputTypes } from "../../types/Input";
import { useUser } from "../../hooks/useUser";
import { Button } from "./Button";
import { Input } from "./Input";
import { ControlledAutocomplete } from "./Autocomplete";


export const Form = () => {
  const { data: user, isLoading, error } = useUser();
  const { control, register, handleSubmit, formState: { errors }, reset } = useForm<InputTypes>();

  useEffect(() => {
    reset({
      birthday: dayjs(user?.birthday).toString(),
      email: user?.email,
      first_name: user?.name.firstname,
      last_name: user?.name.lastname,
      password: user?.password,
      phone_number: user?.phone,
      country: user?.address.city,
      favorite_team: "INTER",
    });
  }, [reset, user]);

  const onSubmit: SubmitHandler<InputTypes> = (data: InputTypes) => {
    console.log({ data });
    reset();
  };

  if (isLoading) {
    return <Box sx={{ width: "100dvw", height: "100dvh" }}>
      <CircularProgress size={50} sx={{ position: "absolute", top: "50%", left: "50%" }} />
    </Box>
  }

  if (error) {
    console.error({ error });
  }

  return (
    <StackContainer sx={{ width: 3 / 4, marginX: "auto" }} direction="column" justifyContent="space-between">
      <Card variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
        >
          Additional Information
        </Typography>
        <Box
          component="form"
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box sx={{ width: 1, display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "space-between", gap: "4rem" }}>
            <Input
              id="first_name"
              placeholder="John"
              isGrouped
              autoComplete="first_name"
              _error={errors.first_name?.message}
              {...register("first_name", { required: "First Name can not be empty ! " })}
              name="first_name"
            >
              First Name
            </Input>
            <Input
              isGrouped
              id="last_name"
              placeholder="Doe"
              {...register("last_name", { required: "Last Name can not be empty ! " })}
              _error={errors.last_name?.message}
              autoComplete="last_name"
            >
              Last Name
            </Input>
          </Box>
          <CustomDatePicker error={errors.birthday?.message as string} control={control} />
          <Input
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="new-password"
            _error={errors.password?.message}
            {...register("password", { required: "Password can not be empty ! " })}
          >
            Password
          </Input>
          <Box>
            <ControlledAutocomplete control={control} />
          </Box>
          <Input
            placeholder="Albania"
            id="country"
            autoComplete="country"
            _error={errors.country?.message}
            {...register("country", { required: "Country can not be empty ! " })}
          >
            Country
          </Input>
          <Input
            placeholder="1234 5678 9012 3456"
            id="phone_number"
            autoComplete="phone_number"
            helperText="No spam calls. Only when I am drunk !"
            _error={errors.phone_number?.message}
            {...register("phone_number", { required: "Phone Number can not be empty ! " })}
          >
            Phone Number
          </Input>
          <Input
            placeholder="john_doe@example.com"
            id="email"
            autoComplete="email"
            helperText="I will not use your email to register on Grinder, I promise !"
            _error={errors.email?.message}
            {...register("email", { required: "Email can not be empty ! " })}
          >
            Email
          </Input>
          <Input
            placeholder="INTER"
            value="INTER"
            id="favorite_team"
            name="favorite_team"
            helperText="There is no other option..."
          >
            Favorite Team
          </Input>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="Subscribe me to your brilliant newsletter !"
          />
          <Button
            variant="contained"
            type="submit"
          >
            Save Changes
          </Button>
        </Box>
        <AlreadyHaveAccount />
        <Divider>
          <Typography sx={{ color: 'text.secondary' }}>or</Typography>
        </Divider>
        <SignUpButtonGroup />
      </Card>
    </StackContainer>
  )
}


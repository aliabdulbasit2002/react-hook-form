import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const HookForm = () => {
  const { register, control, handleSubmit, formState } = useForm();

  const { errors } = formState;

  const submit = (data) => {
    console.log(data);
  };

  return (
    <Box maxW="400px" mx="auto" mt={20}>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email format",
              },
            })}
          />
          <Text color="red">{errors.email?.message}</Text>
        </FormControl>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            id="name"
            {...register("name", {
              required: "Name is required!",
            })}
          />
          <Text color="red">{errors.name?.message}</Text>
        </FormControl>
        <HStack>
          <FormControl>
            <FormLabel>Town</FormLabel>
            <Input type="text" id="town" {...register("address.town")} />
          </FormControl>
          <FormControl>
            <FormLabel>city</FormLabel>
            <Input type="text" id="city" {...register("address.city")} />
          </FormControl>
        </HStack>
        <HStack>
          <FormControl>
            <FormLabel>Phone 1</FormLabel>
            <Input type="number" id="phone1" {...register("phone.0")} />
          </FormControl>
          <FormControl>
            <FormLabel>Phon2 2</FormLabel>
            <Input type="number" id="phone2" {...register("phone.1")} />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required!",
            })}
          />
          <Text color="red">{errors.password?.message}</Text>
        </FormControl>
        <Button type="submit" mt={10}>
          Submit
        </Button>
      </form>
      <DevTool control={control} />
    </Box>
  );
};

export default HookForm;

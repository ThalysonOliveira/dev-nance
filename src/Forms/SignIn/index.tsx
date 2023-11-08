import { Controller, useForm } from "react-hook-form";
import { Button, ErrorMessage, Input } from "../../Components";
import { SubmitText } from "../../Screens/SignIn/styles";
import { loginUserYupResolver } from "../../Schemas";
import { AuthenticateUserInput } from "../../Contexts/auth";

const style = {
  borderWidth: 1,
  borderColor: "#FF375B",
};

export default function SignInForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthenticateUserInput>({
    resolver: loginUserYupResolver,
  });

  function handleSinIn() {}

  return (
    <>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <Input
            style={errors.email && style}
            placeholder="Seu email"
            keyboardType="email-address"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <Input
            style={errors.password && style}
            placeholder="Sua senha"
            onChangeText={onChange}
            secureTextEntry={true}
            value={value}
          />
        )}
      />
      {errors.password && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}

      <Button activeOpacity={0.8} onPress={handleSubmit(handleSinIn)}>
        <SubmitText>Acessar</SubmitText>
      </Button>
    </>
  );
}

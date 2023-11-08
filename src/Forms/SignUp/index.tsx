import { Controller, useForm } from "react-hook-form";
import { Button, ErrorMessage, Input } from "../../Components";
import { AuthContext, CreateUserInput, User } from "../../Contexts/auth";
import { useContext } from "react";
import { ActivityIndicator, Text } from "react-native";
import { SubmitText } from "../../Screens/SignIn/styles";
import { createUserYupResolver } from "../../Schemas";

const style = {
  borderWidth: 1,
  borderColor: "#FF375B",
};

export default function SignUpForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserInput>({
    resolver: createUserYupResolver,
  });

  const { signUp, loadingAuth } = useContext(AuthContext);

  async function handleSignUp({ name, email, password }: User) {
    signUp({ name, email, password });
  }

  return (
    <>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <Input
            style={errors.name && style}
            placeholder="Seu nome"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

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

      {loadingAuth ? (
        <Button>
          <ActivityIndicator size={26} color={"#FFFFFF"} />
        </Button>
      ) : (
        <Button activeOpacity={0.8} onPress={handleSubmit(handleSignUp)}>
          <SubmitText>Cadastrar</SubmitText>
        </Button>
      )}
    </>
  );
}

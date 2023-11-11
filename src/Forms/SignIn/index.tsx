import { Controller, useForm } from "react-hook-form";
import { Button, ErrorMessage, Input } from "../../Components";
import { loginUserYupResolver } from "../../Schemas";
import { AuthContext, AuthenticateUserInput } from "../../Contexts/auth";
import { useContext } from "react";
import { ActivityIndicator } from "react-native";

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

  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleSinIn({ email, password }: AuthenticateUserInput) {
    signIn({ email, password });
  }

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

      {loadingAuth ? (
        <Button>
          <ActivityIndicator size={26} color={"#FFFFFF"} />
        </Button>
      ) : (
        <Button activeOpacity={0.8} onPress={handleSubmit(handleSinIn)}>
          Acessar
        </Button>
      )}
    </>
  );
}

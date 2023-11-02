import { Platform } from "react-native";
import { Background, Container, SubmitText } from "../SignIn/styles";
import { Button, Input } from "../../components";
import { useContext, useState } from "react";
import { AuthContext, User } from "../../contexts/auth";

export default function SignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signUp } = useContext(AuthContext);

  async function handleSignUp({ name, email, password }: User) {
    signUp({ name, email, password });
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <Input
          placeholder="Seu nome"
          value={name}
          onChangeText={(name) => setName(name)}
        />

        <Input
          placeholder="Seu email"
          keyboardType="email-address"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />

        <Input
          placeholder="Sua senha"
          value={password}
          onChangeText={(password) => setPassword(password)}
        />

        <Button
          activeOpacity={0.8}
          onPress={() => handleSignUp({ name, email, password })}
        >
          <SubmitText>Cadastrar</SubmitText>
        </Button>
      </Container>
    </Background>
  );
}

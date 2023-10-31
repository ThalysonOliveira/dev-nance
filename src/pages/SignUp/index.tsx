import { Platform } from "react-native";
import { Background, Container, SubmitText } from "../SignIn/styles";
import { Button, Input } from "../../components";

export default function SignUp() {
  return (
    <Background>
      <Container
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <Input placeholder="Seu nome" />

        <Input placeholder="Seu email" keyboardType="email-address" />

        <Input placeholder="Sua senha" />

        <Button activeOpacity={0.8}>
          <SubmitText>Cadastrar</SubmitText>
        </Button>
      </Container>
    </Background>
  );
}

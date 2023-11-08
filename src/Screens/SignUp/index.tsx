import { Platform } from "react-native";
import { Background, Container } from "../SignIn/styles";
import SignUpForm from "../../Forms/SignUp";

export default function SignUp() {
  return (
    <Background>
      <Container
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <SignUpForm />
      </Container>
    </Background>
  );
}

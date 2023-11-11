import { Background, Container } from "./styles";
import { Header } from "../../Components";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import NewForm from "../../Forms/New";

export default function Register() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Header title="Registrando" />

        <Container
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          enabled
        >
          <NewForm />
        </Container>
      </Background>
    </TouchableWithoutFeedback>
  );
}

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Background, Container, Link, LinkText, Logo } from "./styles";

import { Platform } from "react-native";
import SignInForm from "../../Forms/SignIn";
import { AuthRoutesProps } from "../../Routes/auth.routes";

export default function SignIn() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthRoutesProps>>();

  return (
    <Background>
      <Container
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <Logo source={require("../../../assets/Logo.png")} />

        <SignInForm />

        <Link onPress={() => navigation.navigate("SignUp")}>
          <LinkText>Criar um conta!</LinkText>
        </Link>
      </Container>
    </Background>
  );
}

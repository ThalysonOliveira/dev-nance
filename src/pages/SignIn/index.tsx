import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Background,
  Container,
  Link,
  LinkText,
  Logo,
  SubmitText,
} from "./styles";

import { Platform } from "react-native";
import { AuthRoutesProps } from "../../routes/auth.routes";
import { Button, Input } from "../../components";

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

        <Input placeholder="Seu email" keyboardType="email-address" />

        <Input placeholder="Sua senha" />

        <Button activeOpacity={0.8}>
          <SubmitText>Acessar</SubmitText>
        </Button>

        <Link onPress={() => navigation.navigate("SignUp")}>
          <LinkText>Criar um conta!</LinkText>
        </Link>
      </Container>
    </Background>
  );
}

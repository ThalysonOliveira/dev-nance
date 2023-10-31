import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  AreaInput,
  Background,
  Container,
  Input,
  Link,
  LinkText,
  Logo,
  SubmitButton,
  SubmitText,
} from "./styles";

import { Platform } from "react-native";
import { AuthRoutesProps } from "../../routes/auth.routes";

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

        <AreaInput>
          <Input placeholder="Seu email" keyboardType="email-address" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Sua senha" />
        </AreaInput>

        <SubmitButton activeOpacity={0.8}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate("SignUp")}>
          <LinkText>Criar um conta!</LinkText>
        </Link>
      </Container>
    </Background>
  );
}

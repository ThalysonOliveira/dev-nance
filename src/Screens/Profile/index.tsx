import { Container, ProfileText, UserText } from "./styles";
import { Button, Header } from "../../Components";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/auth";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { AppDrawerRoutesProps } from "../../Routes/app.routes";
export default function Profile() {
  const { user, signOut } = useContext(AuthContext);
  const navigation =
    useNavigation<DrawerNavigationProp<AppDrawerRoutesProps>>();

  return (
    <>
      <Header title="Meu perfil" />
      <Container>
        <ProfileText>Bem vindo de volta</ProfileText>
        {user && <UserText>{user.name}</UserText>}

        <Button activeOpacity={0.8} onPress={() => navigation.navigate("New")}>
          Registar gastos
        </Button>
        <Button color="#C62C36" onPress={signOut} activeOpacity={0.8}>
          Sair
        </Button>
      </Container>
    </>
  );
}

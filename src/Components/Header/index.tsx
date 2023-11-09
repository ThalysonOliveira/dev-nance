import { DrawerActions, useNavigation } from "@react-navigation/native";
import { ButtonMenu, Container, Title } from "./styles";
import Icon from "react-native-vector-icons/Feather";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <Container>
      <ButtonMenu
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Icon name="menu" size={35} color={"#121212"} />
      </ButtonMenu>
      <Title>{title}</Title>
    </Container>
  );
}

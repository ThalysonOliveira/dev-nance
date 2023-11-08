import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../../Contexts/auth";

export default function Home() {
  const { signOut } = useContext(AuthContext);

  return (
    <View>
      <Text>Tela Home</Text>
      <TouchableOpacity onPress={signOut}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

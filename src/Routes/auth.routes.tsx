import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../Screens/SignIn";
import SignUp from "../Screens/SignUp";

export type AuthRoutesProps = {
  SignIn: undefined;
  SignUp: undefined;
};

const AuthStack = createNativeStackNavigator<AuthRoutesProps>();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerStyle: {
            backgroundColor: "#3B3DBF",
          },
          headerTintColor: "#FFFFFF",
          headerTitle: "Voltar",
          headerBackTitleVisible: false,
        }}
      />
    </AuthStack.Navigator>
  );
}

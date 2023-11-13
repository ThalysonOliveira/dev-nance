import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Screens/Home";
import New from "../Screens/New";
import Profile from "../Screens/Profile";
import { CustomDrawer } from "../Components";

export type AppDrawerRoutesProps = {
  Home: undefined;
  New: undefined;
  Profile: undefined;
};

const AppDrawer = createDrawerNavigator<AppDrawerRoutesProps>();

export default function AppRoutes() {
  return (
    <AppDrawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,

        drawerStyle: {
          backgroundColor: "#FFFFFF",
          paddingTop: 20,
        },

        drawerActiveBackgroundColor: "#3B3DBF",
        drawerActiveTintColor: "#FFFFFF",

        drawerInactiveBackgroundColor: "#F0F2FF",
        drawerInactiveTintColor: "#121212",
      }}
    >
      <AppDrawer.Screen name="Home" component={Home} />
      <AppDrawer.Screen
        name="New"
        component={New}
        options={{
          title: "Registrar",
        }}
      />
      <AppDrawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Meu perfil",
        }}
      />
    </AppDrawer.Navigator>
  );
}

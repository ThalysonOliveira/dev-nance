import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Screens/Home";

export type AppDrawerRoutesProps = {
  Home: undefined;
};

const AppDrawer = createDrawerNavigator<AppDrawerRoutesProps>();

export default function AppRoutes() {
  return (
    <AppDrawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#FFFFFF",
          paddingTop: 20,
        },
        drawerActiveBackgroundColor: "#3B3DBF",
        drawerActiveTintColor: "#FFFFFF",
        drawerInactiveTintColor: "#121212",
      }}
    >
      <AppDrawer.Screen name="Home" component={Home} />
    </AppDrawer.Navigator>
  );
}

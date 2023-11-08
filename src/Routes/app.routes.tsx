import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Screens/Home";

export type AppDrawerRoutesProps = {
  Home: undefined;
};

const AppDrawer = createDrawerNavigator<AppDrawerRoutesProps>();

export default function AppRoutes() {
  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen name="Home" component={Home} />
    </AppDrawer.Navigator>
  );
}

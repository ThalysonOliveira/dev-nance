import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/Routes";
import AuthProvider from "./src/Contexts/auth";
import { QueryClient, QueryClientProvider } from "react-query";
import Toast from "react-native-toast-message";

const queryClient = new QueryClient();

export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <StatusBar backgroundColor="#F0F4FF" style="dark" />
          <Routes />
          <Toast />
        </AuthProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

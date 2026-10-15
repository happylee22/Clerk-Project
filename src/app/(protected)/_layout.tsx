import { Redirect, Stack } from "expo-router";
import { useAuth } from "../provider/AuthProvider";

export default function ProtectedLayout() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Redirect href={"/(auth)/sign-in"} />;
  }
  return <Stack screenOptions={{ headerShown: false }} />;
}

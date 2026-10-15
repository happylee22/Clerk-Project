import { Redirect, Stack } from "expo-router";
import { useAuth } from "../provider/AuthProvider";

export default function AuthLayout() {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Redirect href={"/(protected)"} />;
  }
  return <Stack screenOptions={{ headerShown: false }} />;
}

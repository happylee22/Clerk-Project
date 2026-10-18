import { useAuth } from "@clerk/expo";
import { Redirect, Stack } from "expo-router";

export default function ProtectedLayout() {
  const { isSignedIn } = useAuth();
  if (!isSignedIn) {
    return <Redirect href={"/(auth)/sign-in"} />;
  }
  return <Stack screenOptions={{ headerShown: false }} />;
}

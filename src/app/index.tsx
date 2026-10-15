import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "./provider/AuthProvider";

const WelcomeScreen = () => {
  const { isAuthenticated, signOut } = useAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Screen</Text>
      <Text>{isAuthenticated ? "Authenticate" : "Not Authenticated"}</Text>
      <Button title="Sign Out" onPress={signOut} />
      <Link href={"/(auth)/sign-in"}>Go to sign In</Link>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

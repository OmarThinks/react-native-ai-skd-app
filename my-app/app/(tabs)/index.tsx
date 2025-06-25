import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, alignSelf: "stretch" }} edges={["top"]}>
      <View style={{ flex: 1, alignSelf: "stretch", backgroundColor: "#fff" }}>
        <Text>Welcome to the Home Screen!</Text>
      </View>
    </SafeAreaView>
  );
}

import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, alignSelf: "stretch" }} edges={["top"]}>
      <View style={{ flex: 1, alignSelf: "stretch", backgroundColor: "#fff" }}>
        <Text className="text-lg font-bold text-red-400 text-[40px]">
          Welcome to the Home Screen!
        </Text>
      </View>
    </SafeAreaView>
  );
}

import { generateAPIUrl } from "@/utils/generateAPIUrl";
import { useChat } from "@ai-sdk/react";
import { useTheme } from "@react-navigation/native";
import { fetch as expoFetch } from "expo/fetch";
import { View, TextInput, ScrollView, Text, SafeAreaView } from "react-native";

export default function App() {
  const { messages, error, handleInputChange, input, handleSubmit } = useChat({
    fetch: expoFetch as unknown as typeof globalThis.fetch,
    api: generateAPIUrl("/api/chat"),
    onError: (error) => console.error(error, "ERROR"),
  });

  const colors = useTheme().colors;

  if (error) return <Text>{error.message}</Text>;

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View
        style={{
          height: "95%",
          display: "flex",
          flexDirection: "column",
          paddingHorizontal: 8,
          backgroundColor: colors.background,
        }}
      >
        <ScrollView style={{ flex: 1 }}>
          {messages.map((m) => (
            <View key={m.id} style={{ marginVertical: 8 }}>
              <View>
                <Text style={{ fontWeight: 700, color: colors.text }}>
                  {m.role}
                </Text>
                <Text style={{ color: colors.text }}>{m.content}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={{ marginTop: 8 }}>
          <TextInput
            style={{
              backgroundColor: colors.card,
              padding: 8,
              color: colors.text,
            }}
            placeholder="Say something..."
            value={input}
            placeholderTextColor={colors.text}
            onChange={(e) =>
              handleInputChange({
                ...e,
                target: {
                  ...e.target,
                  value: e.nativeEvent.text,
                },
              } as unknown as React.ChangeEvent<HTMLInputElement>)
            }
            onSubmitEditing={(e) => {
              handleSubmit(e);
              e.preventDefault();
            }}
            autoFocus={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

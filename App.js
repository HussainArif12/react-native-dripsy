import { StatusBar } from "expo-status-bar";
import { View, Text } from "dripsy";
import { DripsyProvider } from "dripsy";

export default function App() {
  return (
    <DripsyProvider>
      <View
        sx={{
          height: "100%",
          backgroundColor: "green",
        }}
      >
        <Text sx={{ marginY: 100, color: "rgb(255,255,255)", fontSize: 30 }}>
          This was styled with Dripsy
        </Text>
        <StatusBar style="auto" />
      </View>
    </DripsyProvider>
  );
}

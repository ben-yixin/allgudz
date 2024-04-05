import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SwipeCards} from "./src/features/ItemListing/Components/SwipeCards";

export default function App() {
  return (
    <View style={styles.container}>
      <SwipeCards/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

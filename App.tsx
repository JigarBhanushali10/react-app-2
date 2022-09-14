import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Parent from './components/Parent';




export default function App() {
const value ="value from parent"
  return (
    <View style={styles.container}>
      <Text style={styles.red}>Open up App.tsx tosdvsdv start working on your app!</Text>
      <StatusBar style="auto" />
      <Parent>
        Hi From Parents
      </Parent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color: 'red'
  }
});

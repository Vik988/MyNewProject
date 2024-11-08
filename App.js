import { registerRootComponent } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(); // Ignoriše sve nepotrebne poruke upozorenja.

console.log("App.js Loaded");

export default function App() {
  console.log("Rendering App Component");
  return <AppNavigator />;
}

registerRootComponent(App);


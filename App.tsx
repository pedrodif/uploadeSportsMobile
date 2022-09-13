// Packages
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black } from '@expo-google-fonts/inter'

// Components
import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';
import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })

  // render
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

       { fontsLoaded ? <Home /> : <Loading />}
    </Background>
  );
}


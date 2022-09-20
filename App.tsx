// Packages
import { useRef, useEffect } from 'react';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'
import { Subscription } from 'expo-modules-core';


// Components
import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';
import { StatusBar } from 'react-native';

// Routes
import { Routes } from './src/routes';

// Notifications
import './src/services/notificationConfigs';
import { getPushNotificationToken } from './src/services/getPushNotificationToken';

const getNotificationListener = useRef<Subscription>()
const responseNotificationListener = useRef<Subscription>()

useEffect(() => {
  getPushNotificationToken();
}, [])

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

       { fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}


// Packages
import { useRoute } from '@react-navigation/native';

// Components
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';

// Types
import { GameParams } from '../../@types/navigation';

// Styles
import { styles } from './styles';

export function Game() {
  const route = useRoute();
  const game = route.params as GameParams;

  return (
    <Background>
      <SafeAreaView style={styles.container}>

      </SafeAreaView>
    </Background>
  );
}
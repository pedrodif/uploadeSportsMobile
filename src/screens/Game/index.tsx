// Packages
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

// Components
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';

// Assets
import logoImg from '../../assets/logo-nlw-esports.png'

// Types
import { GameParams } from '../../@types/navigation';

// Styles
import { styles } from './styles';
import { THEME } from '../../theme';

export function Game() {
  const route = useRoute();
  const game = route.params as GameParams;

  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={logoImg}
            style={styles.logo}
          />

          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl}}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"
        />
      </SafeAreaView>
    </Background>
  );
}
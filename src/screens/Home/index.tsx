// Packages
import { useEffect } from 'react';
import { View, Image, FlatList } from 'react-native';

// Styles
import { styles } from './styles';

// Assets
import logoImg from '../../assets/logo-nlw-esports.png';

// Components
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';

// Utils
import { GAMES } from '../../utils/games'

export function Home() {
  useEffect(() => {
    fetch('http://192.168.90.2:3333/games')
    .then(response => response.json())
    .then(data => console.log(data))
  }, [])


  return (
    <View style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <GameCard
            data={item}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
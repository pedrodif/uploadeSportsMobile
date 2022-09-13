// Packages
import { ImageBackground } from 'react-native';

// Styles
import { styles } from './styles';

// Assets
import backgroundImg from '../../assets/background-galaxy.png';

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      style={styles.container}
      source={backgroundImg}
      defaultSource={backgroundImg}
    >
      {children}
    </ImageBackground>
  );
}
// Components
import { View, ActivityIndicator } from 'react-native';

// Styles
import { THEME } from '../../theme';
import { styles } from './styles';

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.PRIMARY} />
    </View>
  );
}
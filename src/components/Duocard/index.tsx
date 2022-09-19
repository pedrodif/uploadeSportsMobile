// Packages
import { TouchableOpacity, View, Text } from 'react-native';
import { GameController } from 'phosphor-react-native';

// Components
import { DuoCardInfo } from '../DuoCardInfo';

// Styles
import { styles } from './styles';
import { THEME } from '../../theme';

export interface DuoCardProps {
  id: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props{
  data: DuoCardProps;
  onConnect: () => void;
}

export function Duocard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoCardInfo
        label="Nome"
        value={data.name}
      />
      <DuoCardInfo
        label="Tempo de jogo"
        value={`${data.yearsPlaying} anos`}
      />
      <DuoCardInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <DuoCardInfo
        label="Chamada de áudio?"
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={onConnect}
      >
        <GameController
          color={THEME.COLORS.TEXT}
          size={20}
        />
        <Text style={styles.buttonTitle}>
          Conectar
        </Text>
      </TouchableOpacity>

    </View>
  );
}
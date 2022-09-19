// Packages
import { TouchableOpacity, View } from 'react-native';

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
}

export function Duocard({ data }: Props) {
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
      <TouchableOpacity></TouchableOpacity>

    </View>
  );
}
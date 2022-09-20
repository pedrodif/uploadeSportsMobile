// Packages
import React from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

// Styles
import { styles } from './styles';
import { THEME } from '../../theme';

interface Props extends ModalProps{
  discord: string;
}

export function DuoMatch({ discord, ...rest }: Props) {
  return (
    <Modal
      transparent
      statusBarTranslucent
      {...rest}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.closeIcon}>
          >
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <Text style={styles.discord}>
            {discord}
          </Text>
        </View>
      </View>
    </Modal>
  );
}
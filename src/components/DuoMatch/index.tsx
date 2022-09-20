// Packages
import React from 'react';
import { View, Modal, ModalProps, Text } from 'react-native';

// Styles
import { styles } from './styles';

interface Props extends ModalProps{
  discord: string;
}

export function DuoMatch({ discord, ...rest }: Props) {
  return (
    <Modal
    {...rest}
    >
      <View style={styles.container}>
        <Text style={styles.discord}>
          {discord}
        </Text>
      </View>
    </Modal>
  );
}
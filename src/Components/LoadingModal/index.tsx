import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import {COLORS} from '../../Common/Colors';

interface ModalProps {
  visible: boolean;
}

const LoadingModal = ({visible}: ModalProps) => {
  return (
    <Modal
      visible={visible || false}
      transparent={true}
      style={styles.modal}
      onRequestClose={() => {}}>
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={COLORS.black} />
      </View>
    </Modal>
  );
};

export {LoadingModal};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    margin: 0,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

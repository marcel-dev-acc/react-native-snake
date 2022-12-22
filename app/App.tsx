import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import COLOURS from './src/constants/colours';
import Game from './src/screens/Game/Game';

const App = () => {

  return (
    <SafeAreaView style={styles.continer}>
      <Game />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: COLOURS.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

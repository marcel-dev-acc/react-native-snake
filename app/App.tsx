import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';
import {GameEngine} from 'react-native-game-engine';

import COLOURS from './src/constants/colours';
import SCREEN from './src/constants/device';

import Head from './src/components/Head/Head';
import GameLoop from './src/components/GameLoop/GameLoop';

const App = () => {

  const [boardSize, setBoardSize] = useState(SCREEN.GRID_SIZE * SCREEN.CELL_SIZE);
  const [engine, setEngine] = useState(null);

  return (
    <SafeAreaView style={styles.continer}>
      <GameEngine
        ref={(ref) => { setEngine(ref) }}
        style={[styles.gameEngine, {
          width: boardSize,
          height: boardSize,
        }]}
        entities={{
          head: {
            position: [0,0],
            xSpeed: 1,
            ySpeed: 0,
            size: SCREEN.CELL_SIZE,
            renderer: <Head />
          }
        }}
        systems={[ GameLoop ]}
      />
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
  gameEngine: {
    flex: undefined,
    backgroundColor: 'grey',
  },
});

export default App;

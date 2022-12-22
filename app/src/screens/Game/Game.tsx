import React, {useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {GameEngine} from 'react-native-game-engine';

import COLOURS from '../../constants/colours';
import SCREEN from '../../constants/device';

import Head from '../../components/Head/Head';
import GameLoop from '../../components/GameLoop/GameLoop';
import Controls from '../../components/Controls/Controls';

const Game = () => {

  const [boardSize, setBoardSize] = useState(SCREEN.GRID_SIZE * SCREEN.CELL_SIZE);
  const [engine, setEngine] = useState(null);

  return (
    <View>
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
            updateFrequency: 10,
            nextMove: 10,
            renderer: <Head />,
          }
        }}
        systems={[ GameLoop ]}
      />
      <Controls engine={engine} />
    </View>
  );
};

const styles = StyleSheet.create({
  gameEngine: {
    flex: undefined,
    backgroundColor: COLOURS.WHITE,
  },
  controls: {},
});

export default Game;

import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  View,
} from 'react-native';
import {GameEngine} from 'react-native-game-engine';

import COLOURS from '../../constants/colours';
import SCREEN from '../../constants/device';

import Head from '../../components/Head/Head';
import GameLoop from '../../components/GameLoop/GameLoop';
import Controls from '../../components/Controls/Controls';
import Food from '../../components/Food/Food';
import Tail from '../../components/Tail/Tail';
import {randomBetween} from '../../utils/random';

type GameEvent = {
  type: string;
};

const Game = () => {

  const handleEvent = (e: GameEvent) => {
    if (e.type === 'game-over') {
      setGameRunning(false);
    } else if (e.type === 'stopped') {
      Alert.alert('Game over!');
    }
  };

  const [boardSize, setBoardSize] = useState(SCREEN.GRID_SIZE * SCREEN.CELL_SIZE);
  const [engine, setEngine] = useState(null);
  const [gameRunning, setGameRunning] = useState(true);

  return (
    <View>
      <GameEngine
        ref={(ref: any) => { setEngine(ref) }}
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
            direction: 'right',
            renderer: <Head />,
          },
          food: {
            position: [
              randomBetween(0, SCREEN.GRID_SIZE - 1),
              randomBetween(0, SCREEN.GRID_SIZE - 1),
            ],
            xSpeed: 1,
            ySpeed: 0,
            size: SCREEN.CELL_SIZE,
            renderer: <Food />,
          },
          tail: {
            size: SCREEN.CELL_SIZE,
            elements: [],
            renderer: <Tail />,
          },
        }}
        systems={[ GameLoop ]}
        onEvent={handleEvent}
        running={gameRunning}
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

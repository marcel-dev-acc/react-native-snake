import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import COLOURS from '../../constants/colours';
import SCREEN from '../../constants/device';

const Tail = (props: any) => {

  let tailList = props.elements.map((el: any, idx: number) => {
    return (
      <View
        key={idx}
        style={[styles.tail,
          {
            width: props.size,
            height: props.size,
            left: el[0] * props.size,
            top: el[1] * props.size,
          }
        ]}
      ></View>
    );
  });

  return (
    <View
      style={[styles.tailContainer, {
        width: SCREEN.GRID_SIZE * props.size,
        height: SCREEN.GRID_SIZE * props.size,
      }]}
    >
      {tailList}
    </View>
  );
};

const styles = StyleSheet.create({
  tailContainer: {

  },
  tail: {
    backgroundColor: COLOURS.GREY,
    position: 'absolute',
  },
});

export default Tail;

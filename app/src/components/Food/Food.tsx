import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import COLOURS from '../../constants/colours';

const Food = (props: any) => {

  return (
    <View
      style={[styles.food, {
        width: props.size,
        height: props.size,
        left: props.position[0] * props.size,
        top: props.position[1] * props.size,
      }]}
    >

    </View>
  );
};

const styles = StyleSheet.create({
  food: {
    backgroundColor: COLOURS.GREEN,
    position: 'absolute',
  },
});

export default Food;

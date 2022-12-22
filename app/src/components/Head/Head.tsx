import React, {useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import COLOURS from '../../constants/colours';

const Head = (props: any) => {

  const [x, setX] = useState(props.position[0]);
  const [y, setY] = useState(props.position[1]);

  return (
    <View
      style={[styles.head, {
        width: props.size,
        height: props.size,
        left: x * props.size,
        top: y * props.size,
      }]}
    >

    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    backgroundColor: COLOURS.RED,
    position: 'absolute',
  },
});

export default Head;

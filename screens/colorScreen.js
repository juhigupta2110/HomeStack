import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ColorCounter from '../components/colorCounter';

const ColorScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const change = 15;

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        color + change > 255 || color - change < 0
          ? null
          : setRed(red + change);
        return;
      case 'green':
        color + change > 255 || color - change < 0
          ? null
          : setGreen(green + change);
        return;
      case 'blue':
        color + change > 255 || color - change < 0
          ? null
          : setBlue(blue + change);
        return;

      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        color="red"
        onIncrease={() => setColor('red', change)}
        onDecrease={() => setColor('red', -1 * change)}
      />

      <ColorCounter
        color="green"
        onIncrease={() => setColor('green', change)}
        onDecrease={() => setColor('green', -1 * change)}
      />

      <ColorCounter
        color="blue"
        onIncrease={() => setColor('blue', change)}
        onDecrease={() => setColor('blue', -1 * change)}
      />

      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}></View>
    </View>
  );
};

export default ColorScreen;

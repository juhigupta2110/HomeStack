import React, {useReducer} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, counter: state.counter + action.payload};

    case 'DECREMENT':
      return {...state, counter: state.counter + action.payload};

    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {counter: 0});

  const {counter} = state;
  const COUNTER_INCREMENT = 1;

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() =>
          dispatch({type: 'INCREMENT', payload: COUNTER_INCREMENT})
        }>
        <Text>INCREMENT</Text>
      </TouchableOpacity>

      <Text style={{marginVertical: 30}}>{counter}</Text>

      <TouchableOpacity
        onPress={() =>
          dispatch({type: 'DECREMENT', payload: -1 * COUNTER_INCREMENT})
        }>
        <Text>DECREMENT</Text>
      </TouchableOpacity>
    </View>
  );

  // WHEN USED USESTATE HOOK FOR THE SAME COUNTER LOGIC

  //const [counter, setCounter] = useState(0);

  // return (
  //   <View>
  //     <TouchableOpacity
  //       onPress={() => {
  //         setCounter(counter + 1);
  //       }}>
  //       <Text>Increase</Text>
  //     </TouchableOpacity>
  //     <Text>{counter}</Text>
  //     <TouchableOpacity
  //       onPress={() => {
  //         setCounter(counter - 1);
  //       }}>
  //       <Text>Decrease</Text>
  //     </TouchableOpacity>
  //   </View>
  // );
};

export default CounterScreen;

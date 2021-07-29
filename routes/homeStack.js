import * as React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/homeScreen';
import ListScreen from '../screens/listScreen';
import ImageScreen from '../screens/imageScreen';
import CounterScreen from '../screens/counterScreen';
import ColorScreen from '../screens/colorScreen';
import ColorChangeWithReducerHook from '../screens/colorChangeWithReducerHook';

const screens = {
  home: HomeScreen,

  list: ListScreen,

  image: ImageScreen,

  counter: CounterScreen,

  color: ColorScreen,

  colorChange: ColorChangeWithReducerHook,
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

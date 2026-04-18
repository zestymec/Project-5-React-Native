import { StyleSheet, Text, View , Image , } from 'react-native'
import type { PropsWithChildren } from 'react';
import React from 'react'
export const DiceImages = {
  one: require('./Diceone.jpg'),
  two: require('./Dicetwo.jpg'),
  three: require('./Dicethree.jpg'),
  four: require('./Dicefour.jpg'),
  five: require('./Dicefive.jpg'),
  six: require('./Dicesix.jpg'),
};
type diceprops = PropsWithChildren<
{
  imageUrl: ImageSourcePropType
}>

function App() : JSX.Element  {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
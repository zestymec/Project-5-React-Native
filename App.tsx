import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import { StyleSheet, Text, View, Image, ImageSourcePropType, Pressable } from 'react-native';
import DiceOne from './dice/Diceone.jpg';
import DiceTwo from './dice/Dicetwo.jpg';
import DiceThree from './dice/Dicethree.jpg';
import DiceFour from './dice/Dicefour.jpg';
import DiceFive from './dice/Dicefive.jpg';
import DiceSix from './dice/Dicesix.jpg';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>


const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View style={styles.diceContainer}>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

export default function App(): JSX.Element {

  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1: setDiceImage(DiceOne); break;
      case 2: setDiceImage(DiceTwo); break;
      case 3: setDiceImage(DiceThree); break;
      case 4: setDiceImage(DiceFour); break;
      case 5: setDiceImage(DiceFive); break;
      case 6: setDiceImage(DiceSix); break;
      default: setDiceImage(DiceOne); break;
    }
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll the dice</Text>
      </Pressable>
    </View>
  );
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
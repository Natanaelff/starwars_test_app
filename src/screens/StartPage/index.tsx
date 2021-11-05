import React from 'react';
import {
  Container,
  Title,
  Button,
  ButtonTitle,
  ViewButton
} from './styles';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native'

import IconAnimated from '../../assets/icons/iconAnimated.json'

import {RootStackParams} from '../../utils/RootStackParams';
import { StackNavigationProp } from '@react-navigation/stack';

type screensStack = StackNavigationProp<RootStackParams, 'Home'>;

export function StartPage(){
  const navigation = useNavigation<screensStack>();

  function handleHome() {
    navigation.navigate('Home');
  }

  return (
   <Container>
     <Title>Que a força esteja com você</Title>

     <Lottie source={IconAnimated} autoPlay loop />

     <ViewButton>
       <Button onPress={handleHome}>
         <ButtonTitle>Entrar</ButtonTitle>
       </Button>
     </ViewButton>
   </Container>
  )
}
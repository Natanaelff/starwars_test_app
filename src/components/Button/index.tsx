import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import {
  Container,
  ButtonTitle,
} from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
  color: 'red' | 'green' | 'orange' | 'blue' | 'purple' | 'oasis';
}

export function Button({title, color,  ...rest}: ButtonProps){
  return (
   <Container color={color} {...rest}>
     <ButtonTitle>{title}</ButtonTitle>
   </Container>
  )
}
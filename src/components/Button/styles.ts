import styled, {css} from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface ColorProps {
  color: 'red' | 'green' | 'orange' | 'blue' | 'purple' | 'oasis';
}

export const Container = styled(RectButton)<ColorProps>`
  width: 100%;
  height: auto;

  align-items: center;
  justify-content: center;

  padding-top: ${RFValue(10)}px;
  padding-bottom: ${RFValue(10)}px;

  margin-bottom: ${RFValue(15)}px;

  border-radius: ${RFValue(20)}px;

  background-color: ${({theme}) => theme.colors.text};

  ${({color}) => color === 'red' && css`
    background-color: ${({theme}) => theme.colors.red};
  `};

  ${({color}) => color === 'green' && css`
    background-color: ${({theme}) => theme.colors.green};
  `};

  ${({color}) => color === 'orange' && css`
    background-color: ${({theme}) => theme.colors.orange};
  `};

  ${({color}) => color === 'blue' && css`
    background-color: ${({theme}) => theme.colors.blue};
  `};
  
  ${({color}) => color === 'purple' && css`
    background-color: ${({theme}) => theme.colors.purple};
  `};

  ${({color}) => color === 'oasis' && css`
    background-color: ${({theme}) => theme.colors.oasis};
  `};
`;

export const ButtonTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.medium};

  color: ${({theme}) => theme.colors.text};
`;
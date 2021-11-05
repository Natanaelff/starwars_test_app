import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;

  padding: ${RFValue(20)}px;

  justify-content: space-between;

  background-color: ${({theme}) => theme.colors.background};
`;

export const ViewLabel = styled.View`
  margin-top: ${RFValue(40)}px;
  margin-bottom: ${RFValue(30)}px;

  flex-direction: row;
  align-items: center;
`;

export const TextLabel = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.bold};

  color: ${({theme}) => theme.colors.text};
`;

export const ViewNames = styled(RectButton)`
  flex: 1;

  margin-bottom: ${RFValue(20)}px;
`;

export const TextName = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.regular};

  color: ${({theme}) => theme.colors.text};
`;

export const ViewButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${RFValue(10)}px;
`;

export const ButtonPage = styled.TouchableOpacity``;

export const TextButton = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({theme}) => theme.fonts.regular};

  color: ${({theme}) => theme.colors.text};
`;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(24)}px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  margin-right: ${RFValue(8)}px;
`;
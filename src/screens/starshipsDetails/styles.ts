import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;

  padding: ${RFValue(20)}px;


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

export const ViewNames = styled.View`
  margin-bottom: ${RFValue(20)}px;

  flex-direction: row;
`;

export const TextName = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.regular};

  color: ${({theme}) => theme.colors.text};

  padding-right: ${RFValue(8)}px;
  padding-bottom: ${RFValue(10)}px;
`;

export const SubTextName = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.bold};

  width: ${RFValue(200)}px;

  color: ${({theme}) => theme.colors.text};
  padding-bottom: ${RFValue(10)}px;
`;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(24)}px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  margin-right: ${RFValue(8)}px;
`;

export const ViewMarge = styled.View``;
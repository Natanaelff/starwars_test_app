import React, { useEffect, useState } from 'react';
import {
  Container,
  ViewLabel,
  TextLabel,
  TextName,
  ViewNames,
  ButtonPage,
  TextButton,
  ViewButton,
  Icon,
  ButtonIcon,
} from './styles';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import {RootStackParams} from '../../utils/RootStackParams';
import { StackNavigationProp } from '@react-navigation/stack';

type screensStack = StackNavigationProp<RootStackParams, 'FilmsDetails'>;

interface FilmsProps {
  title: string;
}

export function Films(){
  const navigation = useNavigation<screensStack>();

  const [listFilms, setListFilms] = useState<FilmsProps[]>([]);

  function handlePeoples() {
    api.get(`films/`)
    .then(res => {
      setListFilms(res.data.results);
    })
    .catch(err => {
      console.log(err);
    })
  }

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    handlePeoples();
  }, []);

  return (
   <Container>
      <ViewLabel>
        <ButtonIcon onPress={handleGoBack}>
          <Icon name="arrow-left" />
        </ButtonIcon>

        <TextLabel>Filmes</TextLabel>  
      </ViewLabel>

      {
        listFilms.map((item, index) => (
          <ViewNames key={index} onPress={() => navigation.navigate('FilmsDetails', {details: item})}>
            <TextName>{item.title}</TextName>
          </ViewNames>
        ))
      }
   </Container>
  )
}
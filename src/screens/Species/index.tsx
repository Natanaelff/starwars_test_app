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

type screensStack = StackNavigationProp<RootStackParams, 'SpeciesDetails'>;

interface SpeciesProps {
  name: string;
}

export function Species(){
  const navigation = useNavigation<screensStack>();

  const [listPeoples, setListPeoples] = useState<SpeciesProps[]>([]);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function handleNextPage() {
    setPage(page + 1);
  }

  function handlePreviusPage() {
    setPage(page - 1);
  }


  function handlePeoples() {
    api.get(`species/?page=${page}`)
    .then(res => {
      setListPeoples(res.data.results);
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
  }, [handleNextPage]);

  return (
   <Container>
      <ViewLabel>
        <ButtonIcon onPress={handleGoBack}>
          <Icon name="arrow-left" />
        </ButtonIcon>

        <TextLabel>Espécies</TextLabel>  
      </ViewLabel>

      {
        listPeoples.map((item, index) => (
          <ViewNames key={index} onPress={() => navigation.navigate('SpeciesDetails', {details: item})}>
            <TextName>{item.name}</TextName>
          </ViewNames>
        ))
      }

      <ViewButton>
        <ButtonPage onPress={handlePreviusPage}>
          <TextButton>Anterior</TextButton>
        </ButtonPage>

        <ButtonPage onPress={handleNextPage}>
          <TextButton>Próximo</TextButton>
        </ButtonPage>
      </ViewButton>
   </Container>
  )
}
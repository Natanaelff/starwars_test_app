import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {
  Container,
  ViewLabel,
  TextLabel,
  TextName,
  SubTextName,
  ViewNames,
  ButtonIcon,
  Icon,
  ViewMarge,
} from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import api from '../../services/api';

export function PlanetsDetails(){
  const navigation = useNavigation();
  const route = useRoute<any>();
  const [films, setFilms] = useState([]);
  const [residents, setResidents] = useState([]);
  const {details} = route.params;


  function handleGoBack() {
    navigation.goBack();
  }

  async function getFilmTitle() {
    const urls = details?.films;
    const filmsTitle:any = [];
    
    for (let index = 0; index < urls.length; index++) {
      const url = urls[index];

      const {data} = await api.get(url)

      filmsTitle.push(data.title)
    }
    
    setFilms(filmsTitle)
  }

  async function getResidentsTitle() {
    const urls = details?.residents;
    const residentsTitle:any = [];
    
    for (let index = 0; index < urls.length; index++) {
      const url = urls[index];

      const {data} = await api.get(url)

      residentsTitle.push(data.name)
    }
    
    setResidents(residentsTitle)
  }

  useEffect(() => {
    getFilmTitle();
    getResidentsTitle();

  }, [])

  return (
   <Container>
      <ViewLabel>
        <ButtonIcon onPress={handleGoBack}>
          <Icon name="arrow-left" />
        </ButtonIcon>

        <TextLabel>Detalhes do Planeta</TextLabel>  
      </ViewLabel>

      <ScrollView contentContainerStyle={{paddingBottom: RFValue(20)}}>
        <ViewNames>
          <TextName>Nome:</TextName>
          <SubTextName>{details?.name}</SubTextName>
        </ViewNames>
        
        <ViewNames>
          <TextName>Período de rotação:</TextName>
          <SubTextName>{details?.rotation_period}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Diâmetro:</TextName>
          <SubTextName>{details?.diameter}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Período orbital:</TextName>
          <SubTextName>{details?.orbital_period}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Clima</TextName>
          <SubTextName>{details?.climate}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Gravidade:</TextName>
          <SubTextName>{details?.gravity}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Terreno:</TextName>
          <SubTextName>{details?.terrain}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Água da superfície:</TextName>
          <SubTextName>{details?.surface_water}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>População:</TextName>
          <SubTextName>{details?.population}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Filmes:</TextName>
          <ViewMarge>
            {films[0] && films.map(film => (
              <SubTextName key={film}>{film}</SubTextName>
            ))}
          </ViewMarge>
        </ViewNames>

        <ViewNames>
          <TextName>Residentes:</TextName>
          <ViewMarge>
            {residents[0] && residents.map(resident => (
              <SubTextName key={resident}>{resident}</SubTextName>
            ))}
          </ViewMarge>
        </ViewNames>
      </ScrollView>
   </Container>
  )
}
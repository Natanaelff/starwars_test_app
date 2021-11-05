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

export function VehiclesDetails(){
  const navigation = useNavigation();
  const route = useRoute<any>();
  const [films, setFilms] = useState([]);
  const [pilots, setPilots] = useState([]);
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

  async function getpilotsTitle() {
    const urls = details?.pilots;
    const pilotsTitle:any = [];
    
    for (let index = 0; index < urls.length; index++) {
      const url = urls[index];

      const {data} = await api.get(url)

      pilotsTitle.push(data.name)
    }
    
    setPilots(pilotsTitle)
  }

  useEffect(() => {
    getFilmTitle();
    getpilotsTitle();

  }, [])

  return (
   <Container>
      <ViewLabel>
        <ButtonIcon onPress={handleGoBack}>
          <Icon name="arrow-left" />
        </ButtonIcon>

        <TextLabel>Detalhes do Veículo</TextLabel>  
      </ViewLabel>

      <ScrollView contentContainerStyle={{paddingBottom: RFValue(20)}}>
        <ViewNames>
          <TextName>Nome:</TextName>
          <SubTextName>{details?.name}</SubTextName>
        </ViewNames>
        
        <ViewNames>
          <TextName>Modelo:</TextName>
          <SubTextName>{details?.model}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Fabricante:</TextName>
          <SubTextName>{details?.manufacturer}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Custo em créditos:</TextName>
          <SubTextName>{details?.cost_in_credits}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Comprimento</TextName>
          <SubTextName>{details?.length}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>velocidade atmosférica máxima:</TextName>
          <SubTextName>{details?.max_atmosphering_speed}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Capacidade de carga:</TextName>
          <SubTextName>{details?.cargo_capacity}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Consumíveis:</TextName>
          <SubTextName>{details?.consumables}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Classe de veículo:</TextName>
          <SubTextName>{details?.vehicle_class}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Passageiros:</TextName>
          <SubTextName>{details?.passengers}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Equipe técnica:</TextName>
          <SubTextName>{details?.crew}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Pilotos:</TextName>
          <ViewMarge>
            {pilots[0] && pilots.map(pilot => (
              <SubTextName key={pilot}>{pilot}</SubTextName>
            ))}
          </ViewMarge>
        </ViewNames>

        <ViewNames>
          <TextName>Filmes:</TextName>
          <ViewMarge>
            {films[0] && films.map(film => (
              <SubTextName key={film}>{film}</SubTextName>
            ))}
          </ViewMarge>
        </ViewNames>
      </ScrollView>
   </Container>
  )
}
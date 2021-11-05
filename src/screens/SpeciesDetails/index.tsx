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

export function SpeciesDetails(){
  const navigation = useNavigation();
  const route = useRoute<any>();
  const [homeworlds, setHomeworlds] = useState();
  const [films, setFilms] = useState([]);
  const [peoples, setPeoples] = useState([]);
  const {details} = route.params;


  function handleGoBack() {
    navigation.goBack();
  }

  function getHomeworlds() {
    return api.get(details?.homeworld)
    .then(res => {
      setHomeworlds(res.data.name)
     })
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

  async function getPeoplesTitle() {
    const urls = details?.people;
    const peoplesTitle:any = [];
    
    for (let index = 0; index < urls.length; index++) {
      const url = urls[index];

      const {data} = await api.get(url)

      peoplesTitle.push(data.name)
    }
    
    setPeoples(peoplesTitle)
  }

  useEffect(() => {
    getFilmTitle();
    getPeoplesTitle();
    getHomeworlds();
  }, [])

  return (
   <Container>
      <ViewLabel>
        <ButtonIcon onPress={handleGoBack}>
          <Icon name="arrow-left" />
        </ButtonIcon>

        <TextLabel>Detalhes da Espécie</TextLabel>  
      </ViewLabel>

      <ScrollView contentContainerStyle={{paddingBottom: RFValue(20)}}>
        <ViewNames>
          <TextName>Nome:</TextName>
          <SubTextName>{details?.name}</SubTextName>
        </ViewNames>
        
        <ViewNames>
          <TextName>Classificação:</TextName>
          <SubTextName>{details?.classification}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Designação:</TextName>
          <SubTextName>{details?.designation}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Altura média:</TextName>
          <SubTextName>{details?.average_height}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Cores de pele</TextName>
          <SubTextName>{details?.skin_colors}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Cores de cabelo:</TextName>
          <SubTextName>{details?.hair_colors}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Cores dos olhos:</TextName>
          <SubTextName>{details?.eye_colors}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Média de vida:</TextName>
          <SubTextName>{details?.average_lifespan}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Planeta Natal:</TextName>
          <SubTextName>{homeworlds}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>linguagem:</TextName>
          <SubTextName>{details?.language}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Personagens:</TextName>
          <ViewMarge>
            {peoples[0] && peoples.map(people => (
              <SubTextName key={people}>{people}</SubTextName>
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
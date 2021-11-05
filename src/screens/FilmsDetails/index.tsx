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

import {RootStackParams} from '../../utils/RootStackParams';
import { StackNavigationProp } from '@react-navigation/stack';

type screensStack = StackNavigationProp<RootStackParams, 'FilmsDetails'>;

export function FilmsDetails(){
  const navigation = useNavigation<screensStack>();
  const route = useRoute<any>();
  const [peoples, setPeoples] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [starships, setStarships] = useState([]);
  const {details} = route.params;


  function handleGoBack() {
    navigation.goBack();
  }

  async function getPeoplesTitle() {
    const urls = details?.characters;
    const peoplesTitle:any = [];
    
    for (let index = 0; index < urls.length; index++) {
      const url = urls[index];

      const {data} = await api.get(url)

      peoplesTitle.push(data.name)
    }
    
    setPeoples(peoplesTitle)
  }

  async function getPlanetsTitle() {
    const urls = details?.planets;
    const planetsTitle:any = [];
    
    for (let index = 0; index < urls.length; index++) {
      const url = urls[index];

      const {data} = await api.get(url)

      planetsTitle.push(data.name)
    }
    
    setPlanets(planetsTitle)
  }

  async function getSpeciesTitle() {
    const urls = details?.species;
    const speciesTitle:any = [];
    
    for (let index = 0; index < urls.length; index++) {
      const url = urls[index];

      const {data} = await api.get(url)

      speciesTitle.push(data.name)
    }
    
    setSpecies(speciesTitle)
  }

  async function getStarshipsTitle() {
    const urls = details?.starships;
    const starshipsTitle:any = [];
    
    for (let index = 0; index < urls.length; index++) {
      const url = urls[index];

      const {data} = await api.get(url)

      starshipsTitle.push(data.name)
    }
    
    setStarships(starshipsTitle)
  }

  async function getVehiclesTitle() {
    const urls = details?.vehicles;
    const vehiclesTitle:any = [];
    
    for (let index = 0; index < urls.length; index++) {
      const url = urls[index];

      const {data} = await api.get(url)

      vehiclesTitle.push(data.name)
    }
    
    setVehicles(vehiclesTitle)
  }

  useEffect(() => {
    getPeoplesTitle();
    getPlanetsTitle();
    getSpeciesTitle();
    getStarshipsTitle();
    getVehiclesTitle();
  }, [])

  return (
   <Container>
      <ViewLabel>
        <ButtonIcon onPress={handleGoBack}>
          <Icon name="arrow-left" />
        </ButtonIcon>

        <TextLabel>Detalhes do Filme</TextLabel>  
      </ViewLabel>

      <ScrollView contentContainerStyle={{paddingBottom: RFValue(20)}}>
        <ViewNames>
          <TextName>Título:</TextName>
          <SubTextName>{details?.title}</SubTextName>
        </ViewNames>
        
        <ViewNames>
          <TextName>Episódios:</TextName>
          <SubTextName>{details?.episode_id}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Abertura:</TextName>
          <SubTextName>{details?.opening_crawl}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Diretor:</TextName>
          <SubTextName>{details?.director}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Produtor</TextName>
          <SubTextName>{details?.producer}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Data de lançamento:</TextName>
          <SubTextName>{details?.release_date}</SubTextName>
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
          <TextName>Planetas:</TextName>
          <ViewMarge>
            {planets[0] && planets.map(planet => (
              <SubTextName key={planet}>{planet}</SubTextName>
            ))}
          </ViewMarge>
        </ViewNames>

        <ViewNames>
          <TextName>Naves estelares:</TextName>
          <ViewMarge>
            {starships[0] && starships.map(starship => (
              <SubTextName key={starship}>{starship}</SubTextName>
            ))}
          </ViewMarge>
        </ViewNames>

        <ViewNames>
          <TextName>Veículos:</TextName>
          <ViewMarge>
            {vehicles[0] && vehicles.map(vehicle => (
              <SubTextName key={vehicle}>{vehicle}</SubTextName>
            ))}
          </ViewMarge>
        </ViewNames>

        <ViewNames>
          <TextName>Espécies:</TextName>
          <ViewMarge>
            {species[0] && species.map(specie => (
              <SubTextName key={specie}>{specie}</SubTextName>
            ))}
          </ViewMarge>
        </ViewNames>
      </ScrollView>
   </Container>
  )
}
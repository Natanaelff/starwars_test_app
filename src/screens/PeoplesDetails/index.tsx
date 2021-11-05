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

export function PeoplesDetails(){
  const navigation = useNavigation();
  const route = useRoute<any>();
  const [films, setFilms] = useState([]);
  const [homeworlds, setHomeworlds] = useState();
  const [species, setSpecies] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [starships, setStarships] = useState([]);
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
    getFilmTitle();
    getSpeciesTitle();
    getVehiclesTitle();
    getStarshipsTitle();
    getHomeworlds();
  }, [])

  return (
   <Container>
      <ViewLabel>
        <ButtonIcon onPress={handleGoBack}>
          <Icon name="arrow-left" />
        </ButtonIcon>

        <TextLabel>Detalhe do Personagem</TextLabel>  
      </ViewLabel>

      <ScrollView contentContainerStyle={{paddingBottom: RFValue(20)}}>
        <ViewNames>
          <TextName>Nome:</TextName>
          <SubTextName>{details?.name}</SubTextName>
        </ViewNames>
        
        <ViewNames>
          <TextName>Altura:</TextName>
          <SubTextName>{details?.height}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Cor dos olhos:</TextName>
          <SubTextName>{details?.eye_color}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Cor da pele:</TextName>
          <SubTextName>{details?.skin_color}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Cor do cabelo:</TextName>
          <SubTextName>{details?.hair_color}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Ano de Nascimento:</TextName>
          <SubTextName>{details?.birth_year}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Gênero:</TextName>
          <SubTextName>{details?.gender}</SubTextName>
        </ViewNames>

        <ViewNames>
          <TextName>Planeta Natal:</TextName>
          <SubTextName>{homeworlds}</SubTextName>
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
          <TextName>Espécies:</TextName>
          <ViewMarge>
            {species[0] && species.map(specie => (
              <SubTextName key={specie}>{specie}</SubTextName>
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
          <TextName>Naves estelares:</TextName>
          <ViewMarge>
            {starships[0] && starships.map(starship => (
              <SubTextName key={starship}>{starship}</SubTextName>
            ))}
          </ViewMarge>
        </ViewNames>
      </ScrollView>
   </Container>
  )
}
import React from 'react';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ViewLabel,
  TextLabel,
} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParams} from '../../utils/RootStackParams';

type screensStack = StackNavigationProp<RootStackParams, 'Peoples'>;

export function Home(){
  const navigation = useNavigation<screensStack>();

  function handlePeoples() {
    navigation.navigate('Peoples')
  }

  function handlePlanets() {
    navigation.navigate('Planets')
  }

  function handleFilms() {
    navigation.navigate('Films')
  }

  function handleSpecies() {
    navigation.navigate('Species')
  }

  function handleVehicles() {
    navigation.navigate('Vehicles')
  }

  function handleStarships() {
    navigation.navigate('Starships')
  }

  return (
      <Container>
        <ViewLabel>
          <TextLabel>O que deseja ver em Star Wars?</TextLabel>  
        </ViewLabel>

        <Button testID="click-people" title="Personagens" color="red" onPress={handlePeoples} />

        <Button title="Planetas" color="green" onPress={handlePlanets} />

        <Button title="Filmes" color="orange" onPress={handleFilms} />

        <Button title="Espécies" color="blue" onPress={handleSpecies} />

        <Button title="Veículos" color="purple" onPress={handleVehicles} />

        <Button title="Naves estelares" color="oasis" onPress={handleStarships} />
      </Container>
  )
}
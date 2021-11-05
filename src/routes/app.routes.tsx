import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { StartPage } from "../screens/StartPage";
import { Home } from "../screens/Home";

import { Peoples } from "../screens/Peoples";
import { PeoplesDetails } from "../screens/PeoplesDetails";

import { Planets } from "../screens/Planets";
import { PlanetsDetails } from "../screens/PlanetsDetails";

import { Films } from "../screens/Films";
import { FilmsDetails } from "../screens/FilmsDetails";

import { Species } from "../screens/Species";
import { SpeciesDetails } from "../screens/SpeciesDetails";

import { Vehicles } from "../screens/Vehicles";
import { VehiclesDetails } from "../screens/VehiclesDetails";

import { Starships } from "../screens/Starships";
import { StarshipsDetails } from "../screens/starshipsDetails";

import {RootStackParams} from '../utils/RootStackParams';

const {Navigator, Screen} = createStackNavigator<RootStackParams>();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="StartPage">
        <Screen
          name="StartPage"
          component={StartPage}
          options={{headerShown: false}}
        />
        <Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Screen
          name="Peoples"
          component={Peoples}
          options={{headerShown: false}}
        />
        <Screen
          name="PeoplesDetails"
          component={PeoplesDetails}
          options={{headerShown: false}}
        />
        <Screen
          name="Planets"
          component={Planets}
          options={{headerShown: false}}
        />
        <Screen
          name="PlanetsDetails"
          component={PlanetsDetails}
          options={{headerShown: false}}
        />
        <Screen
          name="Films"
          component={Films}
          options={{headerShown: false}}
        />
        <Screen
          name="FilmsDetails"
          component={FilmsDetails}
          options={{headerShown: false}}
        />
        <Screen
          name="Species"
          component={Species}
          options={{headerShown: false}}
        />
        <Screen
          name="SpeciesDetails"
          component={SpeciesDetails}
          options={{headerShown: false}}
        />
        <Screen
          name="Vehicles"
          component={Vehicles}
          options={{headerShown: false}}
        />
        <Screen
          name="VehiclesDetails"
          component={VehiclesDetails}
          options={{headerShown: false}}
        />
        <Screen
          name="Starships"
          component={Starships}
          options={{headerShown: false}}
        />
        <Screen
          name="StarshipsDetails"
          component={StarshipsDetails}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
}
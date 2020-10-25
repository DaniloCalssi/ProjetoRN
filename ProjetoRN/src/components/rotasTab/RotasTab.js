import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from '../../views/List/List';
import Perfil from '../../views/Perfil/Perfil';
import { MaterialIcons } from '@expo/vector-icons';
import RotasDrawer from '../rotasDrawer/RotasDrawer';

const Tab = createBottomTabNavigator();

const RotasTab = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={
      {
        labelStyle: { fontSize: 24 },
        style: {backgroundColor: '#333333'},
        activeTintColor: '#FFFFFF', 
        showLabel:false,
      }
      }
    >
      <Tab.Screen 
        name="Inicial" 
        component={RotasDrawer}
        options={{
            unmountOnBlur: true,
            tabBarLabel: 'Inicial',
            tabBarIcon: ({ color }) => (
                <MaterialIcons name='home' size={24} color={color}/>
            ),
        }}
       />
      <Tab.Screen
       name="List" 
       component={List}
       options={{
            tabBarLabel: 'List',
            tabBarIcon: ({ color }) => (
                <MaterialIcons name='storage' size={24} color={color}/>
            ),
        }}
      />
      <Tab.Screen 
        name="Perfil" 
        component={Perfil}
        options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color }) => (
                <MaterialIcons name="person" size={24} color={color}/>
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RotasTab;
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from '../../views/List/List';
import Perfil from '../../views/Perfil/Perfil';
import { MaterialIcons } from '@expo/vector-icons';
import RotasDrawer from '../rotasDrawer/RotasDrawer';

const Tab = createBottomTabNavigator();

const icones = {
  Inicial: { name: 'home' },
  List: { name: 'storage' },
  Perfil: { name: 'done-all' }, 
}

const RotasTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={
        {
          style: {backgroundColor: '#081a31', borderTopColor: '#081a31'},
          activeTintColor: '#FFFFFF',
          showLabel: false,
        }
      }
      screenOptions={ ({route}) => ({
        tabBarIcon: ({color}) => {
            const {name} = icones[route.name];
            return <MaterialIcons name={name} size={30} color={color} />
          }
        })
      }
    >
      <Tab.Screen 
        name="Inicial" 
        component={RotasDrawer}
        options={{
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen 
        name="List" 
        component={List} 
        options={{
          unmountOnBlur: true,
        }}
      />      
      <Tab.Screen
        name="Perfil"
        component={Perfil} 
        initialParams={{item: {}, operacao: 'adicionar'
        }}
    />
    </Tab.Navigator>
  );
}

export default RotasTab;
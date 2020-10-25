import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import estiloPerfil from './estiloPerfil';
import Lista from '../../components/Lista/Lista';
import { MaterialIcons } from '@expo/vector-icons';

function Perfil({ navigation }) {

    

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloPerfil.container}>

            <View style={estiloPerfil.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={estiloPerfil.texto}>Perfil</Text>
                <MaterialIcons name="add" size={24} color="#3d3d3d" />
                
            </View>        
            <Text style={estiloPerfil.titulo}><br></br>Danilo Perim Calssi</Text>
            <Text style={estiloPerfil.text}><br></br>2 DS B-A</Text>
            <ImageBackground style={estiloPerfil.itemFoto} source={require('../../../assets/imagens/foto.jpg')} resizeMode='contain' />
        </View>

        
    )
}

export default Perfil;
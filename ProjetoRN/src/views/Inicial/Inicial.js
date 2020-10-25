import React, { useState } from 'react';
import { ImageBackground, Text, View, TouchableOpacity } from 'react-native';
import estiloInicial from './estiloInicial';
import { AntDesign } from '@expo/vector-icons';
import { useIsDrawerOpen } from '@react-navigation/drawer';

function Inicial({ navigation }) {

    const IsDrawerOpen = useIsDrawerOpen();

    const exibirDrawer = () => {
        if(!IsDrawerOpen){
            navigation.openDrawer();
        }
    }

    const abrirList = () => {
        navigation.navigate('List')
    }
    
    const abrirPerfil = () => {
        navigation.navigate('Perfil')
    }
    
    return (
        <View style={estiloInicial.container}>

            <View style={estiloInicial.header}>
                <TouchableOpacity onPress={exibirDrawer}>
                    <AntDesign name="menu-fold" size={18} color="white" />
                </TouchableOpacity>
            </View>

            <ImageBackground source={require('../../../assets/imagens/fogo.jpg')} style={estiloInicial.fundo}>

                <TouchableOpacity onPress={abrirList}>
                    <ImageBackground source={require('../../../assets/imagens/logo.jpg')} style={estiloInicial.botaoBackground}>
                        <Text style={estiloInicial.botaoTexto}>Lista</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity onPress={abrirPerfil}>
                    <ImageBackground source={require('../../../assets/imagens/foto.jpg')} style={estiloInicial.botaoBackground}>
                        <Text style={estiloInicial.botaoTexto}>Perfil</Text>
                    </ImageBackground>
                </TouchableOpacity>

            </ImageBackground>

        </View>
    )
}

export default Inicial;
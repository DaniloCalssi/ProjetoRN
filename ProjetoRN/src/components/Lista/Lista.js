import React, { useState } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import estiloLista from './estiloLista';
import { LinearGradient } from 'expo-linear-gradient';

const Lista = ({data, detalhe}) => {

    const [item, setItem] = useState(data);

    return (
        <TouchableOpacity style={estiloLista.areaItens} onPress={detalhe}>

            <LinearGradient colors={['#14417b', '#92afd7', '#92afd7']}>
                <Text style={estiloLista.itemTitulo}> {item.nome} </Text>
            </LinearGradient>
            <Text style={estiloLista.itemSubTitulo}> {item.sala} ({item.turma}) </Text>
            
            <LinearGradient colors={['#92afd7', '#92afd7', '#14417b']}>
                <Text> </Text>
                {/*
                <Image 
                    resizeMode='contain'
                    style={estiloLista.itemFoto}
                    source={item.foto}
                />
                */} 
            </LinearGradient>

        </TouchableOpacity>
    );
}

export default Lista;
import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import estiloLista from './estiloLista';
import { LinearGradient } from 'expo-linear-gradient';

const Lista = ({data}) => {

    const [item, setItem] = useState(data);

    return (
        <View style={estiloLista.areaItens}>
            
            <LinearGradient colors={['#3d3d3d','#ededed','#ededed']}>
                <Text style={estiloLista.itemTitulo}> {item.titulo} </Text>
            </LinearGradient>
            <Text style={estiloLista.itemSubTitulo}> {item.autor} ({item.anoPublicacao}) <br></br> {item.descricao} </Text>
            
            <LinearGradient colors={['#ededed','#ededed','#3d3d3d']}>
                <Image 
                    style={estiloLista.itemFoto}
                    source={item.foto} 
                    resizeMode='contain'
                />
            </LinearGradient>
            
        </View>
    );
}

export default Lista;
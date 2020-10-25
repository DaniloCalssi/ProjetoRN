import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import estiloList from './estiloList';
import Lista from '../../components/Lista/Lista';
import { MaterialIcons } from '@expo/vector-icons';

function List({ navigation }) {

    const [list, setList] = useState( [
        {
            id: '1',
            titulo: 'GeForce RTX 3090 (GIGABYTE)',
            descricao: '24Gb de memória GDDR6X , 384 bits, com clock de 19500MHz | Resolução máxima digital: 7680 x 4320 @ 60Hz | CUDA cores: 10496',
            autor: 'NVIDIA',
            anoPublicacao: '2020',
            foto: require('../../../assets/itens/1.jpg'),
        },
        {
            id: '2',
            titulo: 'GeForce RTX 3090 (ASUS)',
            descricao: '10Gb de memória GDDR6X , 320 bits, com clock de 19500 MHz | Resolução máxima digital: 7680 x 4320 @ 60Hz | Cuda cores: 8704',
            autor: 'NVIDIA',
            anoPublicacao: '2020',
            foto: require('../../../assets/itens/2.jpg'),
        },
        {
            id: '3',
            titulo: 'GeForce RTX 2080 Super (GALAX)',
            descricao: '8Gb de memória GDDR6 , 256 bits, com clock de 15500 MHz | Resolução máxima digital: 7680 x 4320 @ 60Hz | Cuda cores: 3072',
            autor: 'NVIDIA',
            anoPublicacao: '2019',
            foto: require('../../../assets/itens/3.jpg'),
        },
        {
            id: '4',
            titulo: 'GeForce RTX 2060 (GIGABYTE)',
            descricao: '6Gb de memória GDDR6 , 192 bits, com clock de 14000 MHz | Resolução máxima digital: 7680 x 4320 @ 60Hz | Cuda cores: 1920',
            autor: 'NVIDIA',
            anoPublicacao: '2019',
            foto: require('../../../assets/itens/4.jpg'),
        }
                                                ]);


    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloList.container}>

            <View style={estiloList.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={estiloList.texto}>Lista</Text>
                <MaterialIcons name="add" size={24} color="white" />
            </View>        
            
            <FlatList
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={list}
                renderItem={ ({item}) => <Lista data={item} />}
            />

        </View>
    )
}

export default List;

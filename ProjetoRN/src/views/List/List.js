import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import estiloList from './estiloList';
import Lista from '../../components/Lista/Lista';
import { MaterialIcons } from '@expo/vector-icons';
import { AlunoFB } from '../../firebase/alunoFB';

function List({ navigation }) {

    const [list, setList] = useState([]);

    const alunoFb = new AlunoFB();

    useEffect(() => {
        alunoFb.pegarColecao()
            .orderBy('nome')
            .onSnapshot((query) => {
                const items = [];
                query.forEach((doc) => {
                    items.push({...doc.data(), id: doc.id});
                });
                setList(items);
            });
    }, []);

    const voltar = () => {
        navigation.navigate('Inicial')
    }

    const adicionar = () => {
        navigation.navigate('Perfil')
    }
    
    const editar = (item) => {
        navigation.navigate('Perfil',item)
    }

    return (
        <View style={estiloList.container}>

            <View style={estiloList.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={estiloList.texto}>Lista</Text>
                <TouchableOpacity onPress={adicionar}>
                    <MaterialIcons name="add" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={list}
                renderItem={ ({item}) => <Lista data={item} detalhe={() => editar(item)}/>}
            />

        </View>
    )
}

export default List;


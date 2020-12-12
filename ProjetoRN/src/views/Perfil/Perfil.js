import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import estiloPerfil from './estiloPerfil';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AlunoFB } from '../../firebase/alunoFB';

function Perfil({ navigation, route }) {

    const [item, setItem] = useState({});
    const {operacao, setOperacao} = route.params;

    const alunoFb = new AlunoFB();

    useEffect(() => {
            setItem(route.params.item);
    }, [route.params.item]);
    

    const voltar = () => {
        navigation.navigate('List')
    }
    
    const salvar = (item) => {
        operacao == 'adicionar' ? alunoFb.adicionarAluno(item) : alunoFb.editarAluno(item);
        voltar();
    }

    const remover = (item) => { 
        alunoFb.removerAluno(item);
        voltar();
    }

    return (
        <View style={estiloPerfil.container}>

            <View style={estiloPerfil.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={estiloPerfil.texto}>Aluno</Text>
                <Text></Text>
            </View>

            <View style={estiloPerfil.formularioContainer}>

                <View style={estiloPerfil.campoContainer}>
                    <FontAwesome5 name="user" size={26} color="#192f6a" />
                    <TextInput
                        style={estiloPerfil.campo}
                        placeholder="Nome"
                        placeholderTextColor='#FFFFFF'
                        onChangeText={nome => setItem({...item, nome})}
                        value={item.nome}
                    />
                </View>

                <View style={estiloPerfil.campoContainer}>
                    <FontAwesome5 name="book-reader" size={26} color="#192f6a" />
                    <TextInput
                        style={estiloPerfil.campo}
                        placeholder="Sala"
                        placeholderTextColor='#FFFFFF'
                        onChangeText={sala => setItem({...item, sala})}
                        value={item.sala}
                    />
                </View>

                <View style={estiloPerfil.campoContainer}>
                    <FontAwesome5 name="users" size={26} color="#192f6a" />
                    <TextInput
                        style={estiloPerfil.campo}
                        placeholder="Turma"
                        placeholderTextColor='#FFFFFF'
                        maxLength={6}
                        onChangeText={turma => setItem({...item, turma})}
                        value={item.turma}
                    />
                </View>

                <View style={estiloPerfil.botoesContainer}>

                    <TouchableOpacity onPress={() => salvar(item)} style={estiloPerfil.botaoContainer}>
                        <LinearGradient colors={['#4c669f', '#192f6a', '#081a31']} style={estiloPerfil.botao}>
                            <MaterialIcons name="save" size={28} color="white"/>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => remover(item)} style={estiloPerfil.botaoContainer}>
                        <LinearGradient colors={['#4c669f', '#192f6a', '#081a31']} style={estiloPerfil.botao}>
                            <MaterialIcons name="delete" size={24} color="white"/>
                        </LinearGradient>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    )
}

export default Perfil;

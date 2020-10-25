import { StyleSheet } from 'react-native';

const estiloPerfil = StyleSheet.create({
   container: {   
      flex: 1,    
   },
   header: {
       height: 40,
       backgroundColor: '#3d3d3d',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       padding: 5,
   },
   texto: {
       fontSize: 18,
       color: '#FFFFFF',
       textAlign: 'center',
   },
    text: {
       fontSize: 18,
       color: '#000000',
       textAlign: 'center',
   },
   titulo: {
       fontSize: 18,
       color: '#000000',
       textAlign: 'center',
       fontWeight: 'bold',
   },
    itemFoto: {
        height: 300,
        marginTop: 20,
        marginBottom: 20
    },
});

  export default estiloPerfil;
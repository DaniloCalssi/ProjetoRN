import { StyleSheet } from 'react-native';

const estiloInicial = StyleSheet.create({
   container: {   
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',     
   },
   header: {
       height: 40,
       width: '100%',
       backgroundColor: '#081a31',
       flexDirection: 'row',
       alignItems: 'flex-end',
   },
   fundo: {   
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100%',
      height: '100%',
   },
   botaoBackground: {
       width: 140,
       height: 100,
       borderRadius: 10,
       overflow: 'hidden',
       justifyContent: 'flex-end',
       alignItems: 'center',
       padding: 10,
       borderWidth: 1,
       borderColor: '#14417b',
   },
   botaoTexto: {
      fontSize: 18,
      color: '#FFFFFF',
   },
   botaoText: {
      fontSize: 18,
      color: '#000000',
   },
});

  export default estiloInicial;
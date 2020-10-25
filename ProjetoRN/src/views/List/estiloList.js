import { StyleSheet } from 'react-native';

const estiloList = StyleSheet.create({
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
   },
});

  export default estiloList;
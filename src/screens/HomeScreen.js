import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

class HomeScreen extends React.Component {

state = {
  data: [
    { id: 0, full_name: 'Imóvel 1', tipo:'Tipo do imóvel: Casa.' },

    { id: 1, full_name: 'Imóvel 2', tipo:'Tipo do imóvel: Terreno.' },
    
    { id: 2, full_name: 'Imóvel 3', tipo:'Tipo do imóvel: Apartamento.' },
    
    { id: 3, full_name: 'Imóvel 4', tipo:'Tipo do imóvel: Condomínio.' },
    
    { id: 4, full_name: 'Imóvel 5', tipo:'Tipo do imóvel: Galpão.' },
    
  ],
};

  renderItem = ({item}) => (
      <View 
      style={{backgroundColor:'#396e89'}}
      style={styles.listItem}>
        <Text style={styles.text}>{item.full_name} {"\n"} <Text style={styles.text2}>{item.tipo} {"\n"}</Text></Text>

        <Button
          title="Mais informações"
          color='#396e89'
          onPress={() =>
            this.props.navigation.navigate('Imóvel 1')
          }
        />
      </View>
    ); 
  

render() {
  return (
    <FlatList
    style={{ marginTop: 30 }}
    contentContainerStyle={styles.list}
    data={this.state.data}
    renderItem={this.renderItem}
    keyExtractor={item => item.id}

    />
    
  );
  }
}

const styles = StyleSheet.create({
  text:{
    fontSize:25,
    fontFamily:'serif',
  },
  text2:{
    fontFamily:'sans-serif',
    fontSize:16,
  },
  list: {
    paddingHorizontal: 20,
    backgroundColor: '#90EE90'
  },
  listItem: {
    backgroundColor: '#fff',
    borderRadius:15,
    marginTop: 20,
    padding: 30,
  },
});

export default HomeScreen;
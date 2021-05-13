import React from 'react';
import { Text, StyleSheet, TextInput, TouchableOpacity, View, Image} from 'react-native';


class LoginScreen extends React.Component {

    state={
        email:"",
        password:""
    }
    
    login_click = () => {
        if(this.state.email == "rafael@tmnt.com" && this.state.password == "cowabanga")
        this.props.navigation.navigate('Home')
        else alert('Email ou senha, incorretos !!!')
    }

     
    render(){
    return(
        <View style={styles.keyboard}>
            <View>
            <Image
            style={{ height: 200, width: 200, justifyContent: 'center' }}
            source={require('../images/appimovel.png')}
                 />
                <Text style={styles.title}>Where's My House?</Text>
                <TextInput
                style={styles.input1}
                placeholder="E-mail"
                autoCorrect={false}
                onChangeText={text => this.setState({email:text})}
                />

                <TextInput
                style={styles.input1}
                placeholder="Senha"
                autoCorrect={false}
                secureTextEntry
                onChangeText={text => this.setState({password:text})}
                />

                <TouchableOpacity
                style={styles.touch} 
                onPress={this.login_click}
                >
                    <Text style={styles.texto}>Entrar</Text> 
                </TouchableOpacity>
            </View>
        </View>
    );
}}



const styles = StyleSheet.create({
    title:{
        fontFamily: "Bernard MT Condensed",
        fontWeight:"bold",
        fontSize:25,
        color:"#396e89",
        marginBottom:30,
        paddingHorizontal: 50
    }, 
    texto: {
      color:'#fff',
      paddingHorizontal: 15
    },
    keyboard:{
        flex:1,  
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#90EE90',
    },
    input1:{
        margin: 15,
        height: 40, 
        width: 250,
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff', 
        borderRadius: 10
    },
    touch:{
        backgroundColor: '#396e89',
        borderRadius: 10,
        width: 90,
        padding: 10,
        marginHorizontal: 95
    }
  });

export default LoginScreen;
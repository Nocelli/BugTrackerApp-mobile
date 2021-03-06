import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AuthContext from '../../contexts/Auth'

const Login = () => {
    
    const { SignIn } = useContext(AuthContext)

    return(
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => SignIn('nome')}>
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
    </View>
)
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#00c968',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 60,
        marginTop: 16,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 60,
        textShadowColor: '#ccc',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1
    }
});


export default Login
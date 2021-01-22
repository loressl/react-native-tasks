import React, {Component} from 'react'
import {
    View,
    ActivityIndicator,
    StyleSheet
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

export default class AuthOrApp extends Component{

    async componentDidMount(){
        const userDataJson= await AsyncStorage.getItem('userData')
        let userData = null

        try {
            userData = JSON.parse(userDataJson)
        } catch (e) {
            
        }

        if(userData && userData.token){
            axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
            this.props.navigation.navigate('Home', userData)
        }else{
            this.props.navigation.navigate('Auth')
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#FFF"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000'
    }
})
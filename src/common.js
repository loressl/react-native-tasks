import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios'
    ? 'http://localhost:3000' : 'http://10.0.2.2:3000'

function showError(err){
    if(err.response && err.response.data){
        Alert.alert('Ops!',`Ocorreu um problema!! ${err.response.data}`)
    }else{
        //Object.keys(err) retorna todas as chaves q vem no error
        Alert.alert('Ops!',`Ocorreu um problema!!`)
    }
}

function showSuccess(msg){
    Alert.alert('Sucesso!', msg)
}

export {server, showError, showSuccess}
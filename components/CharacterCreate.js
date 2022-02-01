import React from 'react';
import {Keyboard, SafeAreaView, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import {goToPage1, goToMenu} from './Actions';
import {Shared} from '../styles/index';

const CharacterCreate = (props) => {

    return(
        <SafeAreaView style={{...Shared.container}}>
            <Text style={[{...Shared.text}, styles.title]}>Create Your Character</Text>
            <Text style={[{...Shared.text}, styles.inputText]}>Name</Text>
            <TextInput
                style={styles.input}
                maxLength={50}
                onChangeText={props.onChangeName}
                defaultValue={props.playerName}
            />
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage1}>
                <Text style={[{...Shared.text}]}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToMenu}>
                <Text style={[{...Shared.text}]}>Go Back</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:'#fff',
        margin: 5,
        padding: 5,
        width: '50%'
    },
    inputText:{
        fontSize: 20,
    },
    title:{
        fontSize: 30,
        marginBottom: 50,
        fontFamily: 'dirtyEgo'
    }
})

export default CharacterCreate;
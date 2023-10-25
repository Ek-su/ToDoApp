import React, { useState } from "react";
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from './AddToDo.style.js';

const AddToDo = ({onSave}) => {

    const [text, setText] = useState('');
    
    const handleSave = () => {
        onSave(text);
        setText('');
    }

    return(
        <View >
            <TextInput placeholder="Yapılacak.." placeholderTextColor={'silver'} 
            onChangeText={(text) => setText(text)}
            value={text}
            />
            <View>
            <TouchableOpacity onPress={handleSave}  >
                <View style={{ height: 1, backgroundColor: 'white' }} /> 
                <Text style={styles.button_text}>Kaydet</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddToDo;
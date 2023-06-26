import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native';

const MyComponent = () => {
    const [text, setText] = React.useState('');
    const [secure, setSecure] = React.useState(true)


    return (
        <View>
            <TextInput
                mode="outlined"
                label="Outlined input"
                placeholder="Type something"
                right={<TextInput.Affix text="/100" />}
            />
            <TextInput
                label="Password"
                secureTextEntry={secure}
                right={secure ? <TextInput.Icon icon="eye-off" onPress={() => { setSecure(false) }} /> : <TextInput.Icon icon="eye" onPress={() => { setSecure(true) }} />}
            />

        </View>
    );
};

export default MyComponent;

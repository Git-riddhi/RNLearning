export const textInput = () => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter Name"
                onChangeText={(inputValue) => setInputValue(inputValue)}
                style={styles.textInputStyle}
                autoCapitalize="words"
                returnKeyType={'next'}
                // autoFocus={true}
                onSubmitEditing={() => { firstTextInput.focus(); }}
            />

            <TextInput
                placeholder="Enter Number"
                onChangeText={(inputValue) => setInputValue(inputValue)}
                style={styles.textInputStyle}
                keyboardType="number-pad"
                autoCapitalize="none"
                placeholderTextColor='grey'
                underlineColorAndroid="transparent"
                returnKeyType={'next'}
                ref={(input) => { firstTextInput = input; }}
                onSubmitEditing={() => { secondTextInput.focus(); }}
            />

            <TextInput
                placeholder="Enter Email"
                onChangeText={(inputValue) => setInputValue(inputValue)}
                style={styles.textInputStyle}
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType={'next'}
                ref={(input) => { secondTextInput = input; }}
                onSubmitEditing={() => { thirdTextInput.focus(); }}
            />

            <TextInput style={styles.textInputStyle}
                placeholder='Enter Password'
                autoFocus={false}
                multiline={false}
                secureTextEntry={true}
                editable={true}
                onChangeText={(inputValue) => setInputValue(inputValue)}
                returnKeyType={'next'}
                ref={(input) => { thirdTextInput = input; }}
                onSubmitEditing={() => { fourthTextInput.focus(); }}
            />

            <TextInput style={styles.textInputStyle}
                placeholder='Enter Address'
                multiline={true}
                editable={true}
                numberOfLines={3}
                autoCapitalize='characters'
                returnKeyType={'done'}
                ref={(input) => { fourthTextInput = input; }}
            />
        </View>
    )

}
export default textInput;
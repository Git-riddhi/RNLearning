import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
    const [result, setResult] = useState('');

    const handleButtonPress = (buttonValue) => {
        if (buttonValue === '=') {
            calculateResult();
        } else if (buttonValue === 'C') {
            clearResult();
        } else {
            setResult(result + buttonValue);
        }
    };

    const calculateResult = () => {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult('Error');
        }
    };

    const clearResult = () => {
        setResult('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>{result}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleButtonPress('7')}
                    >
                        <Text style={styles.buttonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleButtonPress('8')}
                    >
                        <Text style={styles.buttonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleButtonPress('9')}
                    >
                        <Text style={styles.buttonText}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleButtonPress('/')}
                    >
                        <Text style={styles.buttonText}>/</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleButtonPress('4')}
                    >
                        <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleButtonPress('5')}
                    >
                        <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleButtonPress('6')}
                    >
                        <Text style={styles.buttonText}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleButtonPress('*')}
                    >
                        <Text style={styles.buttonText}>*</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleButtonPress('1')}
                    >
                        <Text style={styles.buttonText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleButtonPress('2')}
                    >
                        <Text style={styles.buttonText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleButtonPress('3')}
                    >
                        <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleButtonPress('-')}
                    >
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleButtonPress('0')}
                    >
                        <Text style={styles.buttonText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleButtonPress('.')}
                    >
                        <Text style={styles.buttonText}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleButtonPress('=')}
                    >
                        <Text style={styles.buttonText}>=</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleButtonPress('+')}
                    >
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleButtonPress('C')}
                    >
                        <Text style={styles.buttonText}>C</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    resultContainer: {
        marginBottom: 20,
    },
    resultText: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    buttonContainer: {
        paddingHorizontal: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        padding: 20,
        // flex: 1,
        marginHorizontal: 5,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Calculator;
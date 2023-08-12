import React from 'react';
import { ScrollView, View, } from 'react-native';
import { Neomorph, NeomorphBlur, Shadow } from 'react-native-neomorph-shadows';


const NeumorphismView = () => {


    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, margin: 20 }}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ width: '100%', alignItems: 'center' }}>

                <Neomorph
                    inner // <- enable shadow inside of neomorph
                    swapShadows // <- change zIndex of each shadow color
                    style={{
                        shadowRadius: 10,
                        borderRadius: 25,
                        backgroundColor: '#DDDDDD',
                        width: 150,
                        height: 150,
                        marginBottom: 10

                    }}
                >

                </Neomorph>

                <Shadow
                    inner // <- enable inner shadow
                    useArt // <- set this prop to use non-native shadow on ios
                    style={{
                        shadowOffset: { width: 10, height: 10 },
                        shadowOpacity: 0.5,
                        shadowColor: "grey",
                        shadowRadius: 10,
                        borderRadius: 20,
                        backgroundColor: 'white',
                        width: 150,
                        height: 150,
                        marginBottom: 10

                    }}
                >

                </Shadow>
                <Neomorph
                    style={{
                        shadowRadius: 1.5,
                        borderRadius: 100,
                        backgroundColor: '#DDDDDD',
                        width: 180,
                        height: 180,
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 20

                    }}
                >
                    <Neomorph
                        inner
                        style={{
                            shadowRadius: 8,
                            borderRadius: 90,
                            backgroundColor: '#F19F9F',
                            width: 150,
                            height: 150,
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}
                    >
                        <Neomorph
                            style={{
                                shadowRadius: 6,
                                borderRadius: 50,
                                backgroundColor: '#DDDDDD',
                                width: 80,
                                height: 80,

                            }}
                        />
                    </Neomorph>
                </Neomorph>

                <Neomorph
                    darkShadowColor="green" // <- set this
                    lightShadowColor="orange" // <- this
                    style={{
                        shadowOpacity: 0.3, // <- and this or yours opacity
                        shadowRadius: 10,
                        borderRadius: 50,
                        backgroundColor: '#ECF0F3',
                        width: 150,
                        height: 150,
                        marginBottom: 20
                    }}
                />

                <NeomorphBlur
                    style={{
                        shadowRadius: 12,
                        borderRadius: 70,
                        backgroundColor: '#ECF0F3',
                        width: 140,
                        height: 140,
                        marginBottom: 10
                    }}
                />

             
            </ScrollView>
        </View>
    );
};

export default NeumorphismView;

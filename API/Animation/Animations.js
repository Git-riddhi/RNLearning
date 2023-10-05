import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    useDerivedValue,
    interpolate,
    interpolateColor,
} from 'react-native-reanimated';


const Animations = () => {

// Box on Box --->
    const buttonPressed = () => {
        // Toggle the animation state based on button press
        isAnimating.value = !isAnimating.value;
    };

    // Shared values for animation
    const isAnimating = useSharedValue(false);
    const animationDuration = 1000;

    // Animated styles for the first component
    const box1Style = useAnimatedStyle(() => {
        return {
            width: isAnimating.value ? withTiming(200, { duration: animationDuration }) : withTiming(100, { duration: animationDuration }),
            height: isAnimating.value ? withTiming(200, { duration: animationDuration }) : withTiming(100, { duration: animationDuration }),
            backgroundColor: isAnimating.value ? 'green' : 'blue',
        };
    });

    // Animated styles for the second component
    const box2Style = useAnimatedStyle(() => {
        return {
            backgroundColor: isAnimating.value ? 'orange' : 'red',
            transform: [
                { translateY: isAnimating.value ? withTiming(-170, { duration: animationDuration }) : withTiming(0, { duration: animationDuration }) },
            ],
        };
    });


 // Slide Right ---->
    const animationRight = useSharedValue(0)

    const animationRightStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withTiming(animationRight.value, {
                        duration: 700
                    }, () => {
                        animationRight.value = 0
                    })
                }
            ]
        }
    })

// Slide Left ---->
    const animationLeft = useSharedValue(0)

    const animationLeftStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withTiming(animationLeft.value, {
                        duration: 700
                    }, () => {
                        animationLeft.value = 0
                    })
                }
            ]
        }
    })

// Rotation ---->
    const animation = useSharedValue(0)

    const rotation = useDerivedValue(() => {

        return interpolate(animation.value,
            [0, 360],
            [0, 360])
    })

    const animationRotateStyle = useAnimatedStyle(() => {
        return {

            transform: [
                {
                    rotate: rotation.value + 'deg'
                }
            ]
        }
    })

    const startAnimation = () => {
        if (animation.value === 0) {
            animation.value = withTiming(180, {
              duration: 2000,
            });
          } else {
            animation.value = withTiming(0, {
              duration: 2000,
            });
          }
    }


// Color Interpolation ----->
// Purple to green
    const colorAnimation = useSharedValue(0)

    const animationColor = useDerivedValue(() => {
        return interpolateColor(colorAnimation.value,
            [0, 1],
            ['#631d94', '#399915']
        )
    })

    const startColorAnimation = () => {
        colorAnimation.value = withTiming(1, {
            duration: 2000
        })
        setTimeout(() => {
            colorAnimation.value = 0
        }, 2000)
    }
    const colorAnimationStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: animationColor.value
        }
    })

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }} >
            <View style={styles.container}>

                <Animated.View style={[styles.box1, box1Style]} />
                <Animated.View style={[styles.box2, box2Style]} />
                <TouchableOpacity onPress={buttonPressed} style={styles.button}>
                    <Text style={styles.buttonText}>Animate</Text>
                </TouchableOpacity>

                <TouchableWithoutFeedback onPress={startAnimation}>
                    <Animated.View style={[styles.box3, animationRotateStyle]} />
                </TouchableWithoutFeedback>

                <TouchableOpacity onPress={() => {
                    animationRight.value = 100
                }} >
                    <Animated.View style={[styles.box3, animationRightStyle]} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    animationLeft.value = -100
                }} >
                    <Animated.View style={[styles.box3, animationLeftStyle]} />
                </TouchableOpacity>


                <TouchableWithoutFeedback onPress={startColorAnimation}>
                    <Animated.View style={[styles.box3, colorAnimationStyle]} />
                </TouchableWithoutFeedback>


            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10
        // justifyContent: 'center',
    },

    box1: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        marginBottom: 20,
    },
    box2: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        marginBottom: 20,
    },
    box3: {
        width: 100,
        height: 100,
        marginTop: 10,
        backgroundColor: 'green'
    },
    button: {
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});

export default Animations;
import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { ActivityIndicator, Dimensions } from 'react-native';


const TermAndCondition = () => {

    const [visible, setVisible] = useState(false);
    const height = Dimensions.get('screen').height;
    const width = Dimensions.get('screen').width;


    return (
        <>
            <WebView
                style={{ marginTop: 40 }}
                source={{ uri: 'https://react-native.dev/' }}
                onLoadStart={() => setVisible(true)}
                onLoadEnd={() => setVisible(false)}
            />
            {visible && (
                <ActivityIndicator
                    color={'red'}
                    size={'large'}
                    style={{
                        position: 'absolute',
                        top: height / 2,
                        left: width / 2.1,
                    }}
                />
            )}
        </>
    )
}

export default TermAndCondition;
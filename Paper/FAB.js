import React, { useState } from 'react';

import { Provider, Portal, FAB, ProgressBar, MD3Colors } from 'react-native-paper';



const FABScreen = () => {

    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;
    console.log('fab')

    return (

        <Provider>
            <Portal>
                <ProgressBar style={{ marginTop: 30, width: "90%", alignSelf: 'center' }} progress={0.5} color={MD3Colors.error50} />
                <FAB.Group
                    open={open}
                    visible
                    icon={open ? 'calendar-today' : 'plus'}
                    actions={[
                        { icon: 'plus', onPress: () => console.log('Pressed add') },
                        {
                            icon: 'star',
                            label: 'Star',
                            onPress: () => console.log('Pressed star'),
                        },
                        {
                            icon: 'email',
                            label: 'Email',
                            onPress: () => console.log('Pressed email'),
                        },
                        {
                            icon: 'bell',
                            label: 'Remind',
                            onPress: () => console.log('Pressed notifications'),
                        },
                    ]}
                    onStateChange={onStateChange}
                    onPress={() => {
                        if (open) {
                            // do something if the speed dial is open
                        }
                    }}

                />

            </Portal>
        </Provider>

    );
}


export default FABScreen;
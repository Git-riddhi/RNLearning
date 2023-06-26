import * as React from 'react';
import { Button, Provider,  Text,  Card, Avatar, Snackbar, IconButton } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const CardScreen = () => {

    const [visible, setVisible] = React.useState(false);
    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    return (
        <Provider>
            <SafeAreaProvider>
                <Card>
                    <Card.Cover source={require('../assets/img11.jpeg')} />
                    <Card.Content>
                        <Text variant="titleLarge">Card title</Text>
                        <Text variant="bodyMedium">Card content</Text>
                    </Card.Content>

                    <Card.Actions>
                        <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'} Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions>
                    <Card.Title
                        title="Card Title"
                        subtitle="Card Subtitle"
                        left={(props) => <Avatar.Icon {...props} icon="folder" />}
                        right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />}
                    />
                    <Card.Title
                        title="Card Title"
                        subtitle="Card Subtitle"
                        left={(props) => <Avatar.Image size={35} source={require('../assets/img10.jpeg')} />}
                        right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />}
                    />
                    <Card.Title
                        title="Card Title"
                        subtitle="Card Subtitle"
                        left={() => <Avatar.Text size={34} label="RP" />}
                        right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />}
                    />
                </Card>

                <View style={styles.container}>
                    <Snackbar
                        visible={visible}
                        onDismiss={onDismissSnackBar}
                        action={{
                            label: 'Undo',
                            onPress: () => {
                                // Do something
                            },
                        }}>
                        Hey there! I'm a Snackbar.
                    </Snackbar>
                </View>


            </SafeAreaProvider>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
});


export default CardScreen;
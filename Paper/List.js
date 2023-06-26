import * as React from 'react';
import { Provider, List } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const ListScreen = () => {

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);


    return (
        <Provider>
            <SafeAreaProvider>
                <List.Section title="Accordions">
                    <List.Accordion
                        title="Uncontrolled Accordion"
                        expanded={expanded}
                        left={props => <List.Icon {...props} icon="folder" />}>
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>

                    <List.Accordion
                        title="Controlled Accordion"
                        left={props => <List.Icon {...props} icon="folder" />}
                        expanded={expanded}
                        onPress={handlePress}>
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>
                </List.Section>

                <List.Item
                    title="First Item"
                    description="Item description"
                    left={props => <List.Icon {...props} icon="folder" />}
                />
                 <List.Item
                    title="Second Item"
                    description="Item description"
                    left={props => <List.Icon {...props} icon="folder" />}
                />
                 <List.Item
                    title="Third Item"
                    description="Item description"
                    left={props => <List.Icon {...props} icon="folder" />}
                />
            </SafeAreaProvider>
        </Provider>
    )
}




export default ListScreen;
import * as React from 'react';
import { Appbar, Menu, Button, Divider, Provider } from 'react-native-paper';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const data=[
  {
    'text':''
  }
]

const MyComponent = () => {

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <SafeAreaProvider>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => { }} />
          <Appbar.Content title="Title" />
          <Appbar.Action icon="calendar" onPress={() => { }} />
          <Appbar.Action icon="magnify" onPress={() => { }} />

          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}>
            <Menu.Item onPress={() => { }} title="Edit" />
            <Menu.Item onPress={() => { }} title="Sort" />
            <Menu.Item onPress={() => { }} title="Select All" />

            <Divider />
            <Menu.Item onPress={() => { }} title="Settings" />
          </Menu>
        </Appbar.Header>

      </SafeAreaProvider>
    </Provider>
  )
}

export default MyComponent;

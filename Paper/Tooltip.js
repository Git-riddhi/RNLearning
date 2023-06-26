import * as React from 'react';
import { IconButton, Tooltip} from 'react-native-paper';
import { View } from 'react-native';


const ToolTipScreen = () => (
    <View style={{flexDirection:'row', alignItems:'flex-end', justifyContent:'flex-end'}}>
        <Tooltip title="Camera">
            <IconButton enterTouchDelay={100} icon="camera" selected size={34} onPress={() => { }} />
        </Tooltip>
        <Tooltip title="Search">
            <IconButton enterTouchDelay={100} icon="magnify" selected size={34} onPress={() => { }} />
        </Tooltip>

        <Tooltip title="Options">
            <IconButton enterTouchDelay={100} icon="dots-vertical" selected size={34} onPress={() => { }} />
        </Tooltip>
    </View >
);

export default ToolTipScreen;


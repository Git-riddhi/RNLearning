import React, { useState, useCallback } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, Modal } from 'react-native';
import { Bubble, GiftedChat, Send, IMessage } from 'react-native-gifted-chat';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as DocumentPicker from 'react-native-document-picker';
import Pdf from 'react-native-pdf';
import Feather from 'react-native-vector-icons/Feather';
import SendIcon from 'react-native-vector-icons/Ionicons';

const InChatViewFile = ({ props, visible, onClose }) => {
    const { currentMessage } = props;
    return (
        <Modal
            visible={visible}
            onRequestClose={onClose}
            animationType="slide"
            style={{ height: 600 }}
        >
            <View style={{ padding: 20 }}>
                <Pdf source={{ uri: currentMessage.file.url }} style={{ height: '100%', width: '100%' }} />
                <TouchableOpacity onPress={onClose} style={styles.buttonCancel}>
                    <Text style={styles.textBtn}>X</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

// interface File extends IMessage {
//   url?: string;
// }


const InChatFileTransfer = ({ filePath }) => {
    var fileType = '';
    var name = '';
    if (filePath !== undefined) {
        name = filePath.split('/').pop();
        fileType = filePath.split('.').pop();
    }
    return (
        <View style={styles.containerview}>
            <View
                style={styles.frame}
            >
                {/* <Image
            source={
              fileType === 'pdf'
                ? require('../assests/chat_file.png')
                : require('../assests/unknowFile.png')
            }
            style={{height: 60, width: 60}}
          /> */}
                <View>
                    <Text style={styles.text}>
                        {name.replace('%20', '').replace(' ', '')}
                    </Text>
                    <Text style={styles.textType}>{fileType.toUpperCase()}</Text>
                </View>
            </View>
        </View>
    );
};

const ChatWithSendingFile = () => {
    const [isAttachImage, setIsAttachImage] = useState(false);
    const [isAttachFile, setIsAttachFile] = useState(false);
    const [fileVisible, setFileVisible] = useState(false);
    const [imagePath, setImagePath] = useState('');
    const [filePath, setFilePath] = useState('');
    const [messages, setMessages] = useState([
        {
            _id: 1,
            text: 'Welcome !',
            createdAt: new Date(),
            user: {
                _id: 1,
                name: 'UserChat',
                avatar: '',
            },
            image: '',
            file: {
                url: '',
            }
        },
    ]);


    const onSend = useCallback((messages = []) => {
        const [messageToSend] = messages;
        if (isAttachImage) {
            const newMessage = {
                _id: messages[0]._id + 1,
                text: messageToSend.text,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    avatar: '',
                },
                image: imagePath,
                file: {
                    url: ''
                }
            };
            setMessages(previousMessages =>
                GiftedChat.append(previousMessages, newMessage),
            );
            setImagePath('');
            setIsAttachImage(false);
        } else if (isAttachFile) {
            const newMessage = {
                _id: messages[0]._id + 1,
                text: messageToSend.text,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    avatar: '',
                },
                image: '',
                file: {
                    url: filePath
                }
            };
            setMessages(previousMessages =>
                GiftedChat.append(previousMessages, newMessage),
            );
            setFilePath('');
            setIsAttachFile(false);
        } else {
            setMessages(previousMessages =>
                GiftedChat.append(previousMessages, messages),
            );
        }
    },
        [filePath, imagePath, isAttachFile, isAttachImage],
    );

    const renderSend = (props) => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={_pickDocument}>
                    <Feather
                        name="paperclip"
                        style={styles.paperClip}
                        size={28}
                        color='blue'
                    />
                </TouchableOpacity>
                <Send {...props}>
                    <View style={styles.sendContainer}>
                        <SendIcon

                            name="send"
                            style={styles.sendButton}
                            size={25}
                            color='orange'
                        />
                    </View>
                </Send>
            </View>
        );
    };

    const renderBubble = (props) => {
        const { currentMessage } = props;
        if (currentMessage.file && currentMessage.file.url) {
            return (
                <TouchableOpacity
                    style={{
                        ...styles.fileContainer,
                        backgroundColor: props.currentMessage.user._id === 2 ? '#2e64e5' : '#efefef',
                        borderBottomLeftRadius: props.currentMessage.user._id === 2 ? 15 : 5,
                        borderBottomRightRadius: props.currentMessage.user._id === 2 ? 5 : 15,
                    }}
                    onPress={() => setFileVisible(true)}
                >
                    <InChatFileTransfer
                        style={{ marginTop: -10 }}
                        filePath={currentMessage.file.url}
                    />
                    <InChatViewFile
                        props={props}
                        visible={fileVisible}
                        onClose={() => setFileVisible(false)}
                    />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{
                            ...styles.fileText,
                            color: currentMessage.user._id === 2 ? 'white' : 'black',
                        }} >
                            {currentMessage.text}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        }
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#2e64e5',
                    },
                }}
                textStyle={{
                    right: {
                        color: '#efefef',
                    },
                }}
            />
        );
    };

    // add a function attach file using DocumentPicker.pick
    const _pickDocument = async () => {
        try {
            const result = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
                copyTo: 'documentDirectory',
                mode: 'import',
                allowMultiSelection: true,
            });
            const fileUri = result[0].fileCopyUri;
            console.log('fileUri ===>', fileUri);
            if (!fileUri) {
                console.log('File URI is undefined or null');
                return;
            }
            if (fileUri.indexOf('.png') !== -1 || fileUri.indexOf('.jpg') !== -1) {
                setImagePath(fileUri);
                setIsAttachImage(true);
            } else {
                setFilePath(fileUri);
                setIsAttachFile(true);
            }
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User cancelled file picker');
            } else {
                console.log('DocumentPicker err => ', err);
                throw err;
            }
        }
    };

    const renderChatFooter = useCallback(() => {
        if (imagePath) {
            return (
                <View style={styles.chatFooter}>
                    <Image source={{ uri: imagePath }} style={{ height: 75, width: 75 }} />
                    <TouchableOpacity
                        onPress={() => setImagePath('')}
                        style={styles.buttonFooterChatImg}
                    >
                        <Text style={styles.textFooterChat}>X</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        if (filePath) {
            return (
                <View style={styles.chatFooter}>
                    <InChatFileTransfer
                        filePath={filePath}
                    />
                    <TouchableOpacity
                        onPress={() => setFilePath('')}
                        style={styles.buttonFooterChat}
                    >
                        <Text style={styles.textFooterChat}>X</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        return null;
    }, [filePath, imagePath]);

    const scrollToBottomComponent = () => {
        return <FontAwesome name="angle-double-down" size={22} color="#333" />;
    };

    return (
        <View style={styles.container}>
            {/* <NavBar /> */}
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 2,
                }}
                renderBubble={renderBubble}
                alwaysShowSend
                renderSend={renderSend}
                scrollToBottom
                scrollToBottomComponent={scrollToBottomComponent}
                renderChatFooter={renderChatFooter}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    paperClip: {
        marginTop: 8,
        marginHorizontal: 5,
        transform: [{ rotateY: '180deg' }],
    },
    sendButton: { marginBottom: 10, marginRight: 10 },
    sendContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    chatFooter: {
        shadowColor: '#1F2687',
        shadowOpacity: 0.37,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 8 },
        elevation: 8,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.18)',
        flexDirection: 'row',
        padding: 5,
        backgroundColor: 'blue'
    },
    fileContainer: {
        flex: 1,
        maxWidth: 300,
        marginVertical: 2,
        borderRadius: 15,
    },
    fileText: {
        marginVertical: 5,
        fontSize: 16,
        lineHeight: 20,
        marginLeft: 10,
        marginRight: 5,
    },
    textTime: {
        fontSize: 10,
        color: 'gray',
        marginLeft: 2,
    },
    buttonFooterChat: {
        width: 35,
        height: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderColor: 'black',
        right: 3,
        top: -2,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    buttonFooterChatImg: {
        width: 35,
        height: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderColor: 'black',
        left: 66,
        top: -4,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
    textFooterChat: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray',
    },
    containerview: {
        flex: 1,
        marginTop: 5,
        borderRadius: 15,
        padding: 5,
    },
    text: {
        color: 'black',
        marginTop: 10,
        fontSize: 16,
        lineHeight: 20,
        marginLeft: 5,
        marginRight: 5,
    },
    textType: {
        color: 'black',
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    frame: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderRadius: 10,
        padding: 5,
        marginTop: -4,
    },
    buttonCancel: {
        width: 35,
        height: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderColor: 'black',
        left: 13,
        top: 20,
    },
    textBtn: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
});




export default ChatWithSendingFile;
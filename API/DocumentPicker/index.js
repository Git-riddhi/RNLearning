import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import DocumentPicker from 'react-native-document-picker';

const DocumentPickerScreen = () => {
    const [selectedDocument, setSelectedDocument] = useState({});

    const SelectDocument = async () => {
        // For Select Multiple Document
        try {
            const doc = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
                allowMultiSelection: true,
            });

            console.log('doc=====>', doc[0]);
            setSelectedDocument(doc[0]);
        } catch (err) {
            if (DocumentPicker.isCancel(e))
                console.log('User Cancelled the upload', e);
            else console.log('error ====>', err);
        }
    };

    // For Select Single Document

    // try {
    //     const doc = await DocumentPicker.pick({
    //         type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
    //         allowMultiSelection: false,
    //     });

    //     console.log('doc=====>', doc);
    // } catch (err) {
    //     if (DocumentPicker.isCancel(e))
    //         console.log('User Cancelled the upload', e);
    //     else console.log('error ====>', err);
    // }

    {
        if (selectedDocument == null) {
            console.log('Null');
        } else {
            console.log('selectedDocument==>', selectedDocument);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.mainheader}>Document Picker</Text>
            <View style={styles.buttonView}>
                <Button title="Select Document" onPress={SelectDocument} />
            </View>

            {selectedDocument && (
                <View style={{ marginTop: 40, marginHorizontal: 10 }}>
                    <Text style={styles.heading}>Selected Document:</Text>

                    <Text style={styles.setTextTitle}>Docs Name :</Text>
                    <Text style={styles.setText}>{selectedDocument.name}</Text>

                    <Text style={styles.setTextTitle}>Docs type :</Text>
                    <Text style={styles.setText}>{selectedDocument.type}</Text>

                    <Text style={styles.setTextTitle}>Docs uri :</Text>
                    <Text style={styles.setText}>{selectedDocument.uri}</Text>
                </View>
                
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainheader: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 40,
    },
    buttonView: {
        marginHorizontal: 50
    },
    heading: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'green',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    setTextTitle: {
        fontSize: 15,
        color: 'black',
        marginTop: 10
    },
    setText: {
        fontSize: 15,
        color: 'green'
    }
});

export default DocumentPickerScreen;

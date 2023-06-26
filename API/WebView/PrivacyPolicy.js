import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import WebView from 'react-native-webview';

const PrivacyPolicyScreen = () => {
  const [privacyPolicyContent, setPrivacyPolicyContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPrivacyPolicyContent();
  }, []);

  const fetchPrivacyPolicyContent = async () => {
    try {
      const response = await fetch('YOUR_API_ENDPOINT');
      const data = await response.json();
      setPrivacyPolicyContent(data.content);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <WebView
      source={{ html: privacyPolicyContent }}
      style={{ flex: 1 }}
      scalesPageToFit={true}
      startInLoadingState={true}
      renderLoading={() => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      )}
      renderError={() => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Error loading privacy policy.</Text>
        </View>
      )}
    />
  );
};

export default PrivacyPolicyScreen;
import { WebView } from 'react-native-webview';
import React from "react";

export default () => {
  return <WebView source={{ uri: 'https://admin.redq.now.sh/' }} />;
}

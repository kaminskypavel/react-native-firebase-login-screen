import React, {memo} from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import {logoutUser} from "../api/auth-api";
import registerForPushNotificationsAsync from "../api/notifications";
import {Notifications} from 'expo';
import {Alert, Linking, Text, View} from 'react-native';

class Dashboard extends React.Component {
    state = {
        notification: {},
    };

    _handleNotification = notification => {
        // do whatever you want to do with the notification
        this.setState({notification: notification});
    };

    async componentDidMount() {
        await registerForPushNotificationsAsync();

        // Handle notifications that are received or selected while the app
        // is open. If the app was closed and then opened by tapping the
        // notification (rather than just tapping the app icon to open it),
        // this function will fire on the next tick after the app starts
        // with the notification data.
        this._notificationSubscription = Notifications.addListener(this._handleNotification);
    }


    render() {
        return (
            <Background>
                <Logo/>
                <Header>Let’s start</Header>
                <Paragraph>
                    Press the "GET FCM TOKEN" button, then send yourself then browse to
                    <Text style={{color: 'blue'}} onPress={() => Linking.openURL("https://expo.io/notifications")}>
                        https://expo.io/notifications
                    </Text>
                </Paragraph>
                <Button mode="contained" onPress={async () => {
                    const token = await registerForPushNotificationsAsync();
                    Alert.alert("FCM token", token)
                }}>
                    Get FCM Token
                </Button>
                <Button mode="contained" onPress={async () => {
                    this.props.navigation.navigate("Webview");
                }}>
                    Start Webview
                </Button>
                <Button mode="outlined" onPress={() => logoutUser()}>
                    Logout
                </Button>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Origin: {this.state.notification.origin}</Text>
                    <Text>Data: {JSON.stringify(this.state.notification.data)}</Text>
                </View>

            </Background>
        );
    }
}

export default memo(Dashboard);

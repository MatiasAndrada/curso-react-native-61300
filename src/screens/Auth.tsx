import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/auth';

export default function AuthScreen({ navigation }) {
    /*    const navigation = useNavigation(); */
    return (
        <View style={styles.container}>
            <View style={styles.containerCard}>
                <Text style={styles.title}>Authentication</Text>
                <TouchableOpacity
                    style={styles.buttonSignIn}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.or}>or</Text>
                <TouchableOpacity
                    style={styles.buttonSignUp}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}


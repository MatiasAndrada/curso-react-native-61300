import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
//Styles
import styles from './styles/auth';
//Types
import type { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../navigation/AuthStack';

type NavigationProp = StackNavigationProp<StackParamList, 'Authentication'>;

export default function AuthScreen({ navigation }: { navigation: NavigationProp }) {
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
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}


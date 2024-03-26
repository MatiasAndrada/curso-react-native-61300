import React, { useEffect } from "react";
//Navigation
import TabNavigator from "./TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
//Stack
import AuthStack from "./AuthStack";
//Store
import { useDispatch, useSelector } from "react-redux";
import {
    useGetProfileImageQuery,
} from "../services/shopService";
import { setProfileImage, setUser } from "../features/auth/authSlice";
//DB
import { fetchSession } from "../db";
//Types 
import { RootState } from "../store";

const MainNavigator = () => {
    /*
    const { user, localId } = useSelector((state: RootState) => state.authReducer.value);
    console.log(user)
    const { data } = useGetProfileImageQuery(localId);


    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            console.log("useEffect")
            try {
                const session = await fetchSession();
                console.log(session)
                if (session) {
                    const token = session.token
                    dispatch(setUser({ email: true, idToken: token }));
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    useEffect(() => {
        console.log("useEffect")
        if (data) {
            dispatch(setProfileImage(data.image));
        }

    }, [data]);
*/
    return (
        <NavigationContainer>{/*user ?*/<TabNavigator /> /* : <AuthStack />*/}</NavigationContainer>
    );
};

export default MainNavigator;

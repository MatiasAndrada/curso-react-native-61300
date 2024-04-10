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
    const { user, localId } = useSelector((state: RootState) => state.authReducer.value);
    const { data } = useGetProfileImageQuery(localId);

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                const session = await fetchSession();
                console.log("session", session)
                if (session) {
                    const user = session;
                    dispatch(setUser(user));
                }
            } catch (error: any) {
                console.log(error.message);
            }
        })();
    }, []);

    useEffect(() => {
        if (data) {
            dispatch(setProfileImage(data.image));
        }
        /*
        if (location) {
            dispatch(setUserLocation(location));
        }*/
    }, [data]);

    return (
        <NavigationContainer>{user ? <TabNavigator /> : <AuthStack />}</NavigationContainer>
    );
};

export default MainNavigator;

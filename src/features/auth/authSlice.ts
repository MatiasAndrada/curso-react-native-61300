import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    user: boolean;
    token: null | string;
    imageCamera: null | string;
    localId: string;
    profileImage: null | string;
}

interface SetUserPayload {
    data: {
        email: boolean;
        idToken: null | string;
    };
}

const initialState: AuthState = {
    user: false,
    token: null,
    imageCamera: null,
    localId: "",
    profileImage: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        value: initialState,
    },
    reducers: {
        setUser: (state, action: PayloadAction<SetUserPayload>) => {
            state.value = {
                ...state.value,
                user: action.payload.data.email,
                token: action.payload.data.idToken,
            };
        },
        clearUser: (state) => {
            state.value = {
                ...state.value,
                user: false,
                token: null,
            };
        },
        setCameraImage: (state, action: PayloadAction<string | null>) => {
            state.value = {
                ...state.value,
                imageCamera: action.payload,
            };
        },
        setProfileImage: (state, action: PayloadAction<string>) => {
            state.value = {
                ...state.value,
                profileImage: action.payload,
            };
        },
        logout: (state) => {
            state.value =  {
                ...initialState
            }
        }
    }
});

export const { setUser, clearUser, setCameraImage, setProfileImage, logout } = authSlice.actions;

export default authSlice.reducer;
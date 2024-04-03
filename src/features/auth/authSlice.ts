import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    user: boolean;
    displayName: null | string;
    email: null | string;
    token: null | string;
    kind: null | string;
    imageCamera: null | string;
    profileImage: null | string;
    localId: null | string;
}

interface SetUserPayload {
    registered: boolean,
    displayName: null | string;
    email: string;
    idToken: string;
    kind: string;
    localId: string
}

const initialState: AuthState = {
    user: false,
    displayName: null,
    email: null,
    token: null,
    kind: null,
    imageCamera: null,
    profileImage: null,
    localId: null
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
                user: action.payload.registered,
                displayName: action.payload.displayName,
                email: action.payload.email,
                token: action.payload.idToken,
                kind: action.payload.kind,
                localId: action.payload.localId
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
            state.value = {
                ...initialState
            }
        }
    }
});

export const { setUser, clearUser, setCameraImage, setProfileImage, logout } = authSlice.actions;

export default authSlice.reducer;
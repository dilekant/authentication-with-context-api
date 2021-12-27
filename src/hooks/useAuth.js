import React, {useReducer} from "react";
import axios from "axios";
import {BASE_URL} from "../config";
import {createAction} from "../utils/createAction";
import {sleep} from "../utils/sleep";

export function useAuth() {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'SET_USER':
                return {
                    ...state,
                    user: {...action.payload},
                };
            case 'REMOVE_USER':
                return {
                    ...state,
                    user: undefined,
                };
            default:
                return state;
        }
    }, {
        user: undefined,
    });

    const auth = React.useMemo(() => ({
        login: async (email, password) => {
            const data = await axios
                .post(`${BASE_URL}/api/auth/local`, {
                    identifier: email,
                    password,
                });
            const user = {
                email: data.user.email,
                token: data.jwt,
            };
            console.log(data);
            dispatch(createAction('SET_USER', user));
        },
        logout: () => {
            dispatch(createAction('REMOVE_USER'));
        },
        register: async (email, password) => {
            await sleep(2000);
            await axios
                .post(`${BASE_URL}/api/auth/local/register`, {
                    username: email,
                    email: email,
                    password: password,
                });
        },
    }), []);
    return {auth, state};
}

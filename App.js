import React, {useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';
import {AuthStackNavigator} from './src/navigators/AuthStackNavigator';
import {lightTheme} from './src/themes/light';
import {AuthContext} from "./src/contexts/AuthContext";
import {BASE_URL} from "./src/config";
import {sleep} from "./src/utils/sleep";
import {createAction} from "./src/utils/createAction";

const RootStack = createStackNavigator();

export default function App() {

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'SET_USER':
                return {
                    ...state,
                    user: {...action.payload},
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
            console.log('logout');
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

    console.log(state.user);

  return (
   <AuthContext.Provider value={auth}>
       <NavigationContainer theme={lightTheme}>
           <RootStack.Navigator screenOptions={{headerShown: false}}>
               <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
           </RootStack.Navigator>
       </NavigationContainer>
   </AuthContext.Provider>
  )
}

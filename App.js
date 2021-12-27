import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackNavigator} from './src/navigators/AuthStackNavigator';
import {MainStackNavigator} from './src/navigators/MainStackNavigator';
import {lightTheme} from './src/themes/light';
import {darkTheme} from './src/themes/dark';
import {AuthContext} from "./src/contexts/AuthContext";
import {UserContext} from "./src/contexts/UserContext";
import {useAuth} from "./src/hooks/useAuth";
import {SplashScreen} from "./src/screens/SplashScreen";

const RootStack = createStackNavigator();

export default function App() {
    const {auth, state} = useAuth();

    function renderScreens() {
        if(state.loading) {
            return <RootStack.Screen name={'Splash'} component={SplashScreen} />
        }

        return state.user ?
            <RootStack.Screen name={'MainStack'}>
                {() => (
                    <UserContext.Provider value={state.user}>
                        <MainStackNavigator />
                    </UserContext.Provider>
                )}
            </RootStack.Screen>
            :
            <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
    }

  return (
   <AuthContext.Provider value={auth}>
       <NavigationContainer theme={lightTheme}>
           <RootStack.Navigator screenOptions={{headerShown: false, animationEnabled: false}}>
               {renderScreens()}
           </RootStack.Navigator>
       </NavigationContainer>
   </AuthContext.Provider>
  )
}

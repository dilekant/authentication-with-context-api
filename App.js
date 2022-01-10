import React, {useCallback, useEffect, useState} from 'react';
import {Appearance, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackNavigator} from './src/navigators/AuthStackNavigator';
import {MainStackNavigator} from './src/navigators/MainStackNavigator';
import {lightTheme} from './src/themes/light';
import {darkTheme} from './src/themes/dark';
import {AuthContext} from './src/contexts/AuthContext';
import {UserContext} from './src/contexts/UserContext';
import {useAuth} from './src/hooks/useAuth';
import {SplashScreen} from './src/screens/SplashScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ThemeContext} from './src/contexts/ThemeContext';

const RootStack = createStackNavigator();

export default function App() {
  const {auth, state} = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const switchTheme = useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    _retrieveData();
  }, []);

  const _retrieveData = async () => {
    try {
      const theme = await AsyncStorage.getItem('THEME');
      if (theme !== null) {
        if (theme === 'dark') {
          setIsDarkMode(true);
        } else {
          setIsDarkMode(false);
        }
      } else {
        setIsDarkMode(Appearance.getColorScheme() === 'dark');
      }
    } catch (error) {
      setIsDarkMode(Appearance.getColorScheme() === 'dark');
    }
  };

  function renderScreens() {
    if (state.loading) {
      return <RootStack.Screen name={'Splash'} component={SplashScreen} />;
    }

    return state.user ? (
      <RootStack.Screen name={'MainStack'}>
        {() => (
          <UserContext.Provider value={state.user}>
            <MainStackNavigator />
          </UserContext.Provider>
        )}
      </RootStack.Screen>
    ) : (
      <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
    );
  }

  return (
    <ThemeContext.Provider value={switchTheme}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AuthContext.Provider value={auth}>
        <NavigationContainer theme={isDarkMode ? darkTheme : lightTheme}>
          <RootStack.Navigator
            screenOptions={{headerShown: false, animationEnabled: false}}>
            {renderScreens()}
          </RootStack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import RootNavigator from './src/components/navigation/RootNavigator';
import { store, RootState } from './src/store';

SplashScreen.preventAutoHideAsync();

function AppShell() {
  const darkMode = useSelector((state: RootState) => state.ui.darkMode);
  useEffect(() => {
    const timer = setTimeout(() => SplashScreen.hideAsync(), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppShell />
    </Provider>
  );
}
